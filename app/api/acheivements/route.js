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
    // filter: `user_id = "${user_id}"`,
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
  for (let i = 0; i < acheivements.length; i++) {
    if (acheivements[i].type === achievementType) {
      id = acheivements[i].id;
      break;
    }
  }
  // console.log("Achievement ID:", id);
  // console.log(user_id, id)
  let result = await pb.collection("acheivement_users").getList(1, 1, {filter: `user_id = "${user_id}" && acheivement_id = "${id}"`});
  if (result.items.length > 1) {
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
  
  if (donationCount === 1) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation1");
  } else if (donationCount === 10) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation2");
  } else if (donationCount === 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Donation3");
  }
}

async function handleRaised(pb, user_id, acheivements, user_acheivements) {
  let raisedData = await pb.collection("donations").getList(1, 20, {
    filter: `donor = "${user_id}"`,
  });
  
  const raisedCount = raisedData.items.length;
  
  console.log("Raised Count:", raisedCount);
  
  if (raisedCount === 5000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised1");
  } else if (raisedCount === 10000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised2");
  } else if (raisedCount === 20000) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Raised3");
  }
}

async function handleVolunteer(pb, user_id, acheivements, user_acheivements) {
  let volunteerData = await pb.collection("volunteers").getList(1, 20, {
    filter: `users = "${user_id}"`,
  });
  const volunteerCount = volunteerData.items.length;
  console.log("Volunteer Count:", volunteerCount);
  
  if (volunteerCount === 1) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer1");
  } else if (volunteerCount === 10) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer2");
  } else if (volunteerCount === 20) {
    await grantAchievement(pb, user_id, acheivements, user_acheivements, "Volunteer3");
  }
}
