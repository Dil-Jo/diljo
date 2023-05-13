'use client'
// import Button from "../../global-components/Button";
// import Card from "../../global-components/Card";
import PocketBase from "pocketbase";
import Table from "../components/Table";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { get } from "http";







export default function page() {
  // const [total, setTotal] = useState(0);
  const { id } = useParams();
  const [fundraisers, setfundraisers] = useState([{}])

  async function getData(id) {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    let records = await pb.collection("donations").getFullList({
      filter: `fundraiser = "${id}"`
    });
    console.log({ records })
    let total = 0;
    records.forEach((record) => {
      total += record.amount;
    });
    console.log(id, total);
    return total;
  }
  const getfundraisers = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const fundraisers = await pb.collection("fundraisers").getFullList({ filter: `owner='${id}'` });

    const output = [];

    for (let i = 0; i < fundraisers.length; i++) {
      const fundraiser = fundraisers[i];
      const total = await getData(fundraiser.id);
      output.push({
        title: fundraiser.title,
        caption: fundraiser.caption,
        target: fundraiser.target,
        raised: total,
        thumbnail: pb.files.getUrl(fundraiser, fundraiser.thumbnail)
      });
    }

    setfundraisers(output);
  };
  useEffect(() => {
    getfundraisers();
  }, [])
  // useEffect(() => {
  //   console.log(total)
  // }, [total])

  return (
    <Table className="border border-black" headings={["Title", "Caption", "Target", "Raised"]} rows={fundraisers} />
  );

}


