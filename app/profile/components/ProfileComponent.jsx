import Image from "next/image";
export default function Profileicon(props) {
  return (
    <div className="group mx-auto mt-10 grid w-full max-w-md cursor-pointer place-items-center rounded-xl p-10 pb-8 shadow-lg">
      <Image className="mb-9 mt-4 h-36 w-36 rounded-full border-4 border-green-400"></Image>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Name here
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        Some random detail
      </span>
      {/* <div class="mt-4 flex space-x-3 md:mt-6"></div>
      <div className="mt-8 px-4"></div> */}
    </div>
  );
}
