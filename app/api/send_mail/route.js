import PocketBase from "pocketbase";
const nodemailer = require('nodemailer');
export async function POST(data) {
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL)
	data = await data.json()
	const response = await pb.collection("users").getOne(`${data.user_id}`);
	const response2 = await pb.collection("volunteers").getOne(`${data.drive_id}`,{
		expand: "organizer"
	});
	const request = {
		organizerEmail: response2.expand.organizer.email,
		volunteerEmail: response.email,
		volunteerDrive: response2.title
	}
	try {
		const protocols = nodemailer.createTransport({
			host: 'smtp.office365.com',
			port: 587,
			secure: false,
			auth: {
				user: 'thediljoproject@hotmail.com',
				pass: 'Astrongpassword123'
			},
			tls: {
				ciphers: 'SSLv3'
			}
		});
		const volunteer = {
			from: 'thediljoproject@hotmail.com',
			to: `${request.volunteerEmail}`,
			subject: 'Thank you for volunteering!',
			text: `Thank you for volunteering for the drive. Your contribution is greatly appreciated. For further details you may contact the organizer of the volunteer drive.\n\n Email:  ${request.organizerEmail}\n\nBest regards,\nThe Diljo Project`
		};
		const organizer = {
			from: 'thediljoproject@hotmail.com',
			to: `${request.organizerEmail}`,
			subject: 'New Volunteer Registration',
			text: `A new volunteer has registered for the ${request.volunteerDrive} drive.\n\nYou may contact him using his email at \n\nEmail:  ${request.volunteerEmail}\n\nPlease follow up with the volunteer and provide necessary instructions.\n\nBest regards,\nThe Diljo Project`
		};
		const response = await protocols.sendMail(volunteer);
		const response2 = await protocols.sendMail(organizer);
		console.log('server response:', response, 'server response2:', response2);
	} catch (error) {
		console.error(error.message);
		return new Response(JSON.stringify({ message: "Some Error Occurred" }), {
			headers: { "content-type": "application/json" },
			status: 500
		})
	}
	return new Response(JSON.stringify({ message: "Email sent" }), {
		headers: { "content-type": "application/json" },
		status: 200,
	})
}

