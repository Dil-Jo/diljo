import Link from "next/link";

export default function ButtonGroupComponent(props) {
  return (
    <div className="group mx-auto mt-4 grid w-full max-w-md place-items-center rounded-xl p-10 py-6 shadow-lg ">
      {/* <div className="m-10 w-full  rounded-lg  p-1  outline outline-1 outline-gray-300"> */}
      <OutlineButton text="About" location="about" pb={props.pb} />
      <OutlineButton text="Fundraisers" location="fundraisers" pb={props.pb} />
      <OutlineButton text="Volenteer History" location="volenteerhistory" pb={props.pb} />
      <OutlineButton text="Donations" location="donations" pb={props.pb} />
      <OutlineButton text="Acheivements" location="acheivements" pb={props.pb} />
      {/* </div> */}
    </div>
  );
}

function OutlineButton(props) {
  return (
    <Link
      href={`/profile/${props.pb.authStore.model?.id}/${props.location}`}
      replace={true}
      type="button"
      className="m-2 w-full rounded-lg  border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
    // className="m-2 w-[calc(100%-1rem)] rounded-lg  border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
    >
      {props.text}
    </Link>
  );
}
