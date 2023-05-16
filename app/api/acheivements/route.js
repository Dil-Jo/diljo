import PocketBase from 'pocketbase';
export async function POST(request) {
	request = await request.json();
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
	const id = request.id;
	await Ach(pb, id);
	return new Response();
}

async function Ach(pb, user_id) {
	//Getting the full list of achievemetns
	let acheivements = await pb.collection('acheivements').getFullList({});
	acheivements = Array.from({ length: acheivements.length }, (_, i) => ({
		id: acheivements[i].id,
		type: acheivements[i].type,
	}));

	let user_acheivements = await pb
		.collection('acheivement_users')
		.getFullList({
			//getting the entry on the basis of user
			filter: `user_id = "${user_id}"`,
		});
	user_acheivements = Array.from(
		{ length: user_acheivements.length },
		(_, i) => ({
			acheivement_id: user_acheivements[i].acheivement_id,
			user_id: user_acheivements[i].user_id,
			all_id: user_acheivements[i].id,
		})
	);
	await handleDonation(pb, user_id, acheivements, user_acheivements);
	await handleRaised(pb, user_id, acheivements, user_acheivements);
	await handleVolunteer(pb, user_id, acheivements, user_acheivements);
}

async function grantAchievement(
	pb,
	user_id,
	acheivements,
	user_acheivements,
	achievementType
) {
	// function to grants acheivements
	let id = null;
	for (let i = 0; i < acheivements.length; i++) {
		if (acheivements[i].type === achievementType) {
			id = acheivements[i].id;
			break;
		}
	}
	let result = await pb
		.collection('acheivement_users')
		.getList(1, 1, {
			filter: `user_id = "${user_id}" && acheivement_id = "${id}"`,
		});
	if (result.items.length === 0) {
		let data = {
			acheivement_id: id,
			user_id: user_id,
		};
		await pb.collection('acheivement_users').create(data);
	}
}

async function handleDonation(pb, user_id, acheivements, user_acheivements) {
	//checking donatuions to grant any achievements later
	let donationData = await pb.collection('donations').getList(1, 20, {
		filter: `donor = "${user_id}"`,
	});
	const donationCount = donationData.items.length;
	if (donationCount >= 1) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Donation1'
		);
	}
	if (donationCount >= 10) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Donation2'
		);
	}
	if (donationCount >= 20) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Donation3'
		);
	}
}

async function handleRaised(pb, user_id, acheivements, user_acheivements) {
	//checking the raise amount
	let raisedData = await pb.collection('fundraisers').getFullList({
		filter: `owner = "${user_id}"`,
	});
	async function getRaised(id) {
		const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
		let records = await pb.collection('donations').getFullList({
			filter: `fundraiser = "${id}"`,
		});
		let total = 0;
		records.forEach((record) => {
			total += record.amount;
		});
		return total;
	}

	for (let i = 0; i < raisedData.length; i++) {
		raisedData[i].amount = await getRaised(raisedData[i].id);
	}

	let raisedCount = 0;
	for (let i = 0; i < raisedData.length; i++) {
		raisedCount += raisedData[i].amount;
	}

	if (raisedCount >= 5000) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Raised1'
		);
	}
	if (raisedCount >= 10000) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Raised2'
		);
	}
	if (raisedCount >= 50000) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Raised3'
		);
	}
}

async function handleVolunteer(pb, user_id, acheivements, user_acheivements) {
	//checking how many drives the user has volunteered in
	let volunteerData = await pb.collection('user_volunteers').getList(1, 20, {
		filter: `users = "${user_id}"`,
	});
	const volunteerCount = volunteerData.items.length;
	if (volunteerCount >= 1) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Volunteer1'
		);
	}
	if (volunteerCount >= 10) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Volunteer2'
		);
	}
	if (volunteerCount >= 20) {
		await grantAchievement(
			pb,
			user_id,
			acheivements,
			user_acheivements,
			'Volunteer3'
		);
	}
}
