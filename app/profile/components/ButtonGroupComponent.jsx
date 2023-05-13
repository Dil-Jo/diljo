export default function ButtonGroupComponent(props) {
  return (
    <div className="group mx-auto mt-4 grid w-full max-w-md place-items-center rounded-xl p-10 py-6 shadow-lg bg-white" style={{ backgroundColor: "white" }}>
      <div className="m-10 w-full rounded-lg p-1 outline outline-1 outline-gray-300 ">
        <OutlineButton text="About" location="about" />
        <OutlineButton text="Fundraisers" location="fundraisers" />
        <OutlineButton text="Volenteer History" location="volenteerhistory" />
        <OutlineButton text="Donations" location="donations" />
        <OutlineButton text="Acheivements" location="acheivements" />
      </div>
    </div>
  );
}

function OutlineButton(props) {
  return (
    <>
      <a
        href={`/profile/${props.location}/`}
        type="button"
        className="m-2 w-[calc(100%-1rem)] rounded-lg  border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
      >
        {props.text}
      </a>
    </>
  );
}
