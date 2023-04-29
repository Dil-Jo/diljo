import Link from "next/link";
import React from "react";

const Button = ({ type, text, link = "" }) => {
  const buttonColor = {
    primary:
      "bg-blue-500 hover:bg-blue-600 hover:border-blue-300 focus:ring-blue-200",
    secondary:
      "bg-gray-500 hover:bg-gray-600 hover:border-gray-300 focus:ring-gray-200",
    tertiary:
      "bg-green-500 hover:bg-green-600 hover:border-green-300 focus:ring-green-200",
    quaternary:
      "bg-red-500 hover:bg-red-600 hover:border-red-300 focus:ring-red-200",
    quinary:
      "bg-yellow-500 hover:bg-yellow-600 hover:border-yellow-300 focus:ring-yellow-200",
    senary:
      "bg-pink-500 hover:bg-pink-600 hover:border-pink-300 focus:ring-pink-200",
    septenary:
      "bg-purple-500 hover:bg-purple-600 hover:border-purple-300 focus:ring-purple-200",
  };
  const btnStyles = `w-full place-items-center rounded-lg  px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 sm:w-auto rounded-lg border w-max px-4 py-1 text-sm font-semibold text-gray-800 text-white ${buttonColor[type]}`;
  if (link !== "")
    return (
      <button className={btnStyles}>
        <Link href={link}>{text}</Link>
      </button>
    );
  else return <button className={btnStyles}>{text}</button>;
};

export default Button;
