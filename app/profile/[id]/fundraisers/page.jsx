'use client'
// import Button from "../../global-components/Button";
// import Card from "../../global-components/Card";
import PocketBase from "pocketbase";
import Table from "../components/Table";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function page() {
  const { id } = useParams();
  console.log({ id })
  const [fundraisers, setfundraisers] = useState([{}])
  const getfundraisers = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const fundraisers = await pb.collection("fundraisers").getFullList({ filter: `owner='${id}'` });
    const output = fundraisers.map((fundraiser) => {
      return {
        title: fundraiser.title,
        caption: fundraiser.caption,
        target: fundraiser.target,
        thumbnail: pb.files.getUrl(fundraiser, fundraiser.thumbnail)
      }
    });
    setfundraisers(output);
  };
  useEffect(() => {
    getfundraisers();

  }, [])

  return (
    <Table headings={["Title", "Caption", "Target"]} rows={fundraisers} />
  );

}


