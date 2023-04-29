import Image from "next/image";

export default function CurrentSettingComponent(props) {
  return (
    <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
      <div className={"h-[50vh] w-full"}>
        <div className={"m-5"}>
          <div>
            <h1>Name</h1>
            <p>{props.name}</p>
            <div
              className={"w-full border-b-2 border-dashed border-black"}
            ></div>
            <Image
              alt={""}
              src={"/assets-profile/pencil.png"}
              width={10}
              height={10}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
