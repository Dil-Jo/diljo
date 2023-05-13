import PocketBase from "pocketbase";

export async function POST(request) {
  request = await request.json();
  
return new Response(JSON.stringify(request));
}

function DonationAch(pb, id){
  return id;
}

function VolunteerAch(){

}

function RaisedAch(){

}
function FundraiserAch(){

}
function DriveAch(){

}
