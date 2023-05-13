import PocketBase from "pocketbase";

export async function POST(request) {
  request = await request.json();
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  const id = request.id;
  console.log("Request ID:", id);
  Ach(pb, id);
  return new Response();
}

async function Ach(pb, user_id) {
  let acheivements = await pb.collection("acheivements").getFullList({});
  acheivements = Array.from({ length: acheivements.length }, (_, i) => ({
    id: acheivements[i].id,
    type: acheivements[i].type,
  }));
  console.log("Achievements:", acheivements);
  
  let user_acheivements = await pb.collection("acheivement_users").getFullList({
    filter: `user_id = "${user_id}"`,
  });
  user_acheivements = Array.from({ length: user_acheivements.length }, (_, i) => ({
    acheivement_id: user_acheivements[i].acheivement_id,
    user_id: user_acheivements[i].user_id,
    all_id: user_acheivements[i].id,
  }));
  console.log("User Achievements:", user_acheivements);
  
  await handleDonation(pb, user_id, acheivements, user_acheivements);
  await handleRaised(pb, user_id, acheivements, user_acheivements);
  await handleVolunteer(pb, user_id, acheivements, user_acheivements);
}

async function grantAchievement(pb, user_id, acheivements, user_acheivements, achievementType) {
  let id = null;
  console.log("fuck")
  for (let i = 0; i < acheivements.length; i++) {
    if (acheivements[i].type === achievementType) {
      id = acheivements[i].id;
      break;
    }
  }
  let result = await pb.collection("acheivement_users").getList(1, 1, {filter: `user_id = "${user_id}" && acheivement_id = "${id}"`});
  if (result.items.length === 0) {
    let data = {
      "acheivement_id": id,
      "user_id": user_id,
    }
    await pb.collection("acheivement_users").create(data);
  }
}

async function handleDonation(pb, user_id, acheivements, user_acheivements) {
  let donationData = await pb.collection("donations").getList(1, 20, {
    filter: `donor = "${user_id}"`,
  });
  const donationCount = donationData.items.length;
  console.log("Donation Count:", donationCount);
  
  if (donationCount >= 1 && donationCount < 10) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation1");
  } if (donationCount >= 10 && donationCount < 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation2");
  } if (donationCount >= 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation3");
  }
}

async function handleRaised(pb, user_id, acheivements, user_acheivements) {
  let raisedData = await pb.collection("donations").getFullList({
    filter: `donor = "${user_id}"`,
  });
  
  let raisedCount = 0;
  for (let i = 0; i < raisedData.length; i++) {
    raisedCount += raisedData[i].amount;
  }
  console.log("Raised Count: ",raisedCount)
  
  if (raisedCount >= 5000 && raisedCount < 10000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised1");
  } if (raisedCount >= 10000 && raisedCount < 20000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised2");
  } if (raisedCount >= 20000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised3");
  }
}

async function handleVolunteer(pb, user_id, acheivements, user_acheivements) {
  let volunteerData = await pb.collection("user_volunteers").getList(1, 20, {
    filter: `users = "${user_id}"`,
  });
  const volunteerCount = volunteerData.items.length;
  console.log("Volunteer Count:", volunteerCount);
  
  if (volunteerCount >= 1 && volunteerCount < 10) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer1");
  } if (volunteerCount >= 10 && volunteerCount < 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer2");
  } if (volunteerCount >= 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer3");
  }
}
