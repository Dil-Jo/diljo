"use client";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function Navwrapper() {
  return <>{usePathname() === "/" || usePathname() === "/raisefunds" ? <></> : <Navbar />}</>;
}
