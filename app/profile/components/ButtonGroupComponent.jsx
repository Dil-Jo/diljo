import OutlineButton from "../../global-components/OutlineButton";

export default function ButtonGroupComponent(props) {
  return (
    <div className="group mx-auto mt-7 grid w-full max-w-md place-items-center rounded-xl p-10 py-6 shadow-lg ">
      <div className="m-10 w-full  rounded-lg  p-1  outline outline-1 outline-gray-300">
        <OutlineButton text="About" />
        <OutlineButton text="Change Passowrd" />
        <OutlineButton text="Update Email" />
        <OutlineButton text="somthing idk" />
        <OutlineButton text="somthing idk" />
        <OutlineButton text="somthing idk" />
        <OutlineButton text="somthing idk" />
        <OutlineButton text="somthing idk" />
      </div>
    </div>
  );
}
