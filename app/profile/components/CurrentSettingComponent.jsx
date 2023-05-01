import Image from "next/image";
import Button from "../../global-components/Button";
import Card from "../../global-components/Card";
import { SmallCard } from "./SmallCard";

export default function CurrentSettingComponent(props) {
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className={"w-full"}>
          <SmallCard />
        </div>
      </div>
    </>
  );
}

function Field(props) {
  return (
    <div className="m-5 border-b-2">
      <div className="m-3 flex flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0 md:mr-4 md:flex-1">
          <h1 className="text-xl font-black tracking-tighter text-gray-900">
            {props.name}
          </h1>
          <h1 className="text-lg text-gray-500">{props.detail}</h1>
        </div>
        <div className="md:w-40 md:flex-none">
          <Button
            type="primary"
            text="Edit"
            className="w-full md:w-auto"
          ></Button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
      <div className={"w-full"}>
        <h1
          className={
            "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
          }
        >
          About
        </h1>
      </div>
      <div className={"h-full w-full grid gap-4"}>
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
        <Field name="fuckyouhfjshalfdlj" detail={"jfdsalkjflakjflkajflajf"} />
      </div>
    </div>
  );
}
