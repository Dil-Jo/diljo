"use client"
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function MainWrapper({ children }) {
  return (
    <>
      {usePathname() === "/nearbyDonations" ? <main className={"bg-ten h-full"}>{children}</main> : usePathname() === "/raisefunds" ? <main className={"bg-ten h-full"}><Navbar />{children}</main> : <main className="mainContainer bg-ten h-full" id={"mainContainer"}>{children}</main>}
    </>
  );
}