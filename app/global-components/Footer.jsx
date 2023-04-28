import Link from "next/link";
export default function Footer() {
  return (
    <footer class="m-4 rounded-lg bg-gray-200 shadow dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1>logo</h1>
          </div>
          <ul class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link
                href="/explore"
                className=" my-10 ml-10 text-gray-700 hover:underline dark:text-gray-400 md:text-lg"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/main"
                className=" my-10 ml-10 text-gray-700 hover:underline dark:text-gray-400 md:text-lg"
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" my-10 ml-10 text-gray-700 hover:underline dark:text-gray-400 md:text-lg"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}
