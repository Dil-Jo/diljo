import Image from "next/image";
export default function Profileicon(props) {
  return (
    <div className="group mx-auto mt-10 grid w-full max-w-md cursor-pointer place-items-center rounded-xl p-10 pb-8 shadow-lg ">
      <div>
        <div className="mt-4 h-36 w-36 rounded-full border-4 border-green-400"></div>
        <h1 className=" mx-auto my-5 text-center text-gray-700 dark:text-gray-400 md:text-lg ">
          Name here
        </h1>
      </div>
      <div className="mt-8 px-4"></div>
    </div>
  );
}
