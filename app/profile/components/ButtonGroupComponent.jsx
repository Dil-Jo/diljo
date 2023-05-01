import OutlineButton from "../../global-components/OutlineButton";

export default function ButtonGroupComponent(props) {
  return (
    <div className="group mx-auto mt-4 grid w-full max-w-md place-items-center rounded-xl p-10 py-6 shadow-lg ">
      <div className="m-10 w-full  rounded-lg  p-1  outline outline-1 outline-gray-300">
        <OutlineButton text="About" />
        <OutlineButton text="Password" />
        <OutlineButton text="Fundraisers" />
        <OutlineButton text="Volnteer History" />
        <OutlineButton text="Donations" />
        <OutlineButton text="Card Details" />
      </div>
    </div>
  );
}
