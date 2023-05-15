"use client";
import CharityCard from "./components/CharityCard";
import PocketBase from "pocketbase";
import { useState, useEffect } from "react";
export default function page() {

  const [charities, setCharities] = useState([]);
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  const getCollectionData = async () => {// Function  to get the list of charities from the data base
    try {
      const response = await pb.collection("charities").getList();
      setCharities(response.items);
    } catch (error) {
      console.error("Failed to get collection data:", error);
    }
  };
  useEffect(() => { //calling getCollection at start
    getCollectionData();
    console.log(charities);
  }, []);

  return (
    <div className="w-full h-full mt-8 ">
      <h1 className="text-start text-3xl font-bold tracking-tighter ml-10">
        Charities
      </h1>
      <div className="grid grid-cols-1 gap-5 mx-auto my-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        {charities.map((card) => {
          console.log(card);
          return (
            <CharityCard name={card.name} phone={card.phone} email={card.email} description={card.description} logo={pb.files.getUrl(card, card.img)} website={String(card.url)} />
          )
        })}
      </div>
    </div>
  );
}
