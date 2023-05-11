"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
function ConditionalFooter() {
  return (
    <footer className="m-4 rounded-lg bg-gray-200 shadow dark:bg-gray-900 p-1">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4  w-full p-5 [&>ul]:border-gray-300 [&>ul]:border-l-2 [&>ul]:p-3 rounded-lg border-2 border-gray-300">
        <div className="w-20 md:ml-26 md:mr-20 sm:ml-20 lg:ml-36">
          <Link href="/">
            <Logo width="80px" />
          </Link>
        </div>
        <ul className="flex flex-col my-6 h-36 [&>li]:my-2 justify-center ">
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
        </ul>
        <ul className=" flex flex-col [&>li]:my-2 justify-center my-6 h-36">
          <li>
            <Link href="/about">
              <p>Visit Non-profit Organizations</p>
            </Link>
          </li>
          <li>
            <Link href="/nearbyDonations">
              <p>Volunteer for Donation Drives</p>
            </Link>
          </li>
        </ul>
        <ul className=" flex flex-col [&>li]:my-2 justify-center my-6 h-36">
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Terms and Conditions</p>
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
