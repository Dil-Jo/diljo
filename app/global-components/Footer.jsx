"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
function ConditionalFooter() {
  return (
    <footer className="m-4 rounded-lg bg-gray-200 shadow dark:bg-gray-900 p-1">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4  w-full p-5 [&>ul]:border-gray-300 [&>ul]:border-l-2 [&>ul]:p-3 rounded-lg border-2 border-gray-300">
        <div className="w-20 ml-32">
          <Link href="/">
            <Logo width="80px" />
          </Link>
        </div>
        <ul className="flex flex-col [&>li]:my-2">
          <li>
            <Link href="/explore">
              <p>Explore Fundraisers</p>
            </Link>
          </li>
          <li>
            <Link href="/raisefunds">
              <p>Start a Fundraiser</p>
            </Link>
          </li>
          <li>
            <p>some detail</p>
          </li>
        </ul>
        <ul className=" flex flex-col [&>li]:my-2">
          <li>
            <p>some detail</p>
          </li>
          <li>
            <p>some detail</p>
          </li>
          <li>
            <p>some detail</p>
          </li>
        </ul>
        <ul className=" flex flex-col [&>li]:my-2">
          <li>
            <p>some detail</p>
          </li>
          <li>
            <p>some detail</p>
          </li>
          <li>
            <p>some detail</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default function Footer() {
  const pathname = usePathname();

  // if (pathname === "/raisefunds") {
  //   return <></>;
  // }

  return <ConditionalFooter />;
}
