'use client'
import Table from "../components/Table";
import PocketBase from "pocketbase";
import { useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../../Contexts/GlobalContext";



export default function page() {
  const { pb } = useContext(GlobalContext);
  const { id } = useParams();
  const [donations, setdonations] = useState(null)
  const getdonations = async () => {
    const donations = await pb.collection("donations").getFullList({ filter: `donor='${id}'`, expand: 'fundraiser' });
    const output = donations.map((donation) => {
      console.log({ donation })
      return {
        title: donation.expand.fundraiser.title,
        caption: donation.expand.fundraiser.caption,
        amount: donation.amount,
        thumbnail: pb.files.getUrl(donation.expand.fundraiser, donation.expand.fundraiser.thumbnail),
        date: donation.created,
        fundraisrId: donation.fundraiser,
        link: `/donation/${donation.fundraiser}`
      };
    });
    // console.log({ output });
    setdonations(output);
  };
  useEffect(() => {
    getdonations();
  }, []);
  return (
    donations && <Table headings={['Title', 'Caption', 'Amount', 'date']} rows={donations} />
  );
}

