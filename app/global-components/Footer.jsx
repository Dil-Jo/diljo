"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ConditionalFooter() {
  return (
    <footer className="m-4 rounded-lg bg-gray-200 shadow dark:bg-gray-900 p-1">
      <div className="flex w-full md:flex-row flex-col md:items-center items-start md:justify-around  p-5 [&>ul]:border-gray-300 [&>ul]:border-l-2 [&>ul]:p-3 rounded-lg border-2 border-gray-300">
        <h1>logo</h1>
        <ul className="flex flex-col [&>li]:my-2">
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

  if (pathname === "/raisefunds") {
    return <></>;
  }

  return <ConditionalFooter />;
}
