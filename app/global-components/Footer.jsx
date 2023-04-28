import Link from "next/link";
export default function Footer() {
  return (
    <footer class="bg-gray-200 rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1>logo</h1>
          </div>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="/explore"
                className=" text-gray-700 md:text-lg dark:text-gray-400 ml-10 my-10 hover:underline"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/main"
                className=" text-gray-700 md:text-lg dark:text-gray-400 ml-10 my-10 hover:underline"
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" text-gray-700 md:text-lg dark:text-gray-400 ml-10 my-10 hover:underline"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}
