'use client'
import Table from "../components/Table";
import PocketBase from "pocketbase";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";



export default function page() {
  const { id } = useParams();
  console.log({ id })
  const [donations, setdonations] = useState([{}])
  const getdonations = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const donations = await pb.collection("donations").getFullList({ filter: `donor='${id}'`, expand: 'fundraiser' });
    // console.log({ donations })
    const output = donations.map((donation) => {
      return {
        title: donation.expand.fundraiser.title,
        caption: donation.expand.fundraiser.caption,
        amount: donation.amount,
        thumbnail: pb.files.getUrl(donation.expand.fundraiser, donation.expand.fundraiser.thumbnail),
        date: donation.created
      };
    });
    // console.log({ output });
    setdonations(output);
  };
  useEffect(() => {
    getdonations();
  }, []);
  return (
    <Table headings={['Title', 'Caption', 'Amount', 'date']} rows={donations} />
  );
}

