import Image from "next/image";

export default function ProfileComponent(props) {
  return (
    <div className="group mx-auto grid w-full max-w-md place-items-center rounded-xl p-10 pb-8 shadow-lg">
      <Image
        className="mb-9 mt-4 h-36 w-36 rounded-full border-4 border-green-400"
        alt={""}
        src={""}
      ></Image>
      <h5 className="mb-1 text-xl font-medium tracking-tighter text-gray-900 dark:text-white">
        Name here
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Some random detail
      </span>
      {/* <div class="mt-4 flex space-x-3 md:mt-6"></div>
      <div className="mt-8 px-4"></div> */}
    </div>
  );
}
