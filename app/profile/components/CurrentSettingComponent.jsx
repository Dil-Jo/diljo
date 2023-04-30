import Image from "next/image";
import Button from "../../global-components/Button";

export default function CurrentSettingComponent(props) {
  return (
    <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
      <div className={"w-full"}>
        <h1
          className={
            "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800"
          }
        >
          About
        </h1>
      </div>
      <div className={"h-[50vh] w-full"}>
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
      </div>
    </div>
  );
}

function Field(props) {
  return (
    <>
      <div className={"m-5 border-b-2"}>
        <div className={"m-3 flex"}>
          <h1
            className={
              "text inline w-72  text-xl font-black tracking-tighter text-gray-900"
            }
          >
            {props.name}
          </h1>
          <h1 className={"text inline w-[50rem] text-lg  text-gray-500"}>
            {props.detail}
          </h1>
          <Button type={"primary"} text={"edit"}></Button>
        </div>
      </div>
    </>
  );
}
