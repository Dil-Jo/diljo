"use client"
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }) {
  return (
    <>
      {usePathname() === "/nearbyDonations" ? <main className={"bg-ten"}>{children}</main> : <main className="mainContainer bg-ten" id={"mainContainer"}>{children}</main>}
    </>
  );
}