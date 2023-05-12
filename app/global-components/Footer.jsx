"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

function ConditionalFooter() {
  return (
    <footer className=" mt-0 bg-six shadow dark:bg-gray-900 p-1">
      <div
        className="grid md:grid-cols-4 grid-cols-1 gap-4  w-full p-1 [&>ul]:border-gray-400 [&>ul]:border-l-2 [&>ul]:p-2 [&>ul>li]:text-one [&>ul>li]:font-bold [&>ul]:md:my-6 [&>ul]:my-0 [&>ul>li]:cursor-pointer">
        <div className=" flex md:justify-center items-center justify-start md:ml-0 ml-3">
          <Link href="/">
            <Logo width="60px" color={"white"}/>
          </Link>
        </div>
        <ul className="flex flex-col h-24 [&>li]:my-2 justify-center ">
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
        <ul className=" flex flex-col [&>li]:my-2 justify-center h-24">
          <li>
            <Link href="/charities">
              <p>Visit Non-profit Organizations</p>
            </Link>
          </li>
          <li>
            <Link href="/nearbyDonations">
              <p>Volunteer for Donation Drives</p>
            </Link>
          </li>
        </ul>
        <ul className=" flex flex-col [&>li]:my-2 justify-center my-2 h-24">
          <li>
            <a href="mailto:someone@example.com">Send email</a>
          </li>
          <li>
            <label className={"cursor-pointer"} htmlFor={"terms-and-conditions"}>Terms and Conditions</label>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname === "/raisefunds" || pathname === "/nearbyDonations") {
    return <></>;
  }
  
  return <ConditionalFooter />;
}
