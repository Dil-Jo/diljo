'use client'
// import Button from "../../global-components/Button";
// import Card from "../../global-components/Card";
// import PocketBase from "pocketbase";
import Table from "../components/Table";
import { useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../../Contexts/GlobalContext";
import { get } from "http";





export default function page() {
  const { pb } = useContext(GlobalContext);
  const { id } = useParams();
  console.log({ id })
  const [fundraisers, setfundraisers] = useState([{}])

  const getfundraisers = async () => {
    // const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const fundraisers = await pb.collection("fundraisers").getFullList({ filter: `owner='${id}'` });
    const output = fundraisers.map((fundraiser) => {
      return {
        id: fundraiser.id,
        title: fundraiser.title,
        caption: fundraiser.caption,
        target: fundraiser.target,
        thumbnail: pb.files.getUrl(fundraiser, fundraiser.thumbnail)
      }
    });

    await calcRaised(output);
    // setfundraisers(output);
  };

  const calcRaised = async (crippledFundraisers) => {
    let final = [...crippledFundraisers]
    for await (const fundraiser of final) {
      console.log({ fundraiser })
      const donations = await pb.collection("donations").getFullList({ filter: `fundraiser='${fundraiser.id}'` });
      console.log({ donations })
      let total = 0;
      donations.forEach((donation) => {
        total += donation.amount;
      })
      console.log({ total })
      fundraiser.raised = total;
    }

    setfundraisers(final);

    // fundraisers.forEach((fundraiser)=>{
    // const donations = await pb.collection("donations").getFullList({filter: `fundraiser='${fundraiser.id}'`});
    // let total = 0;
    // donations.forEach((donation)=>{
    // total += donation.amount;
    // })
    // fundraiser.raised = total;
    // })
  }

  useEffect(() => {
    getfundraisers().then(() => {
      // console.log({ finalFundraisers: fundraisers })
    }).catch((err) => {
      console.log({ err })
    })
  }, []);

  // useEffect(() => {
  //   console.log({ finalFunds: fundraisers })
  // }, [fundraisers])

  return (
    <Table className="border border-black" headings={["Title", "Caption", "Raised", "Target"]} rows={fundraisers} tableName="fundraisers" />
  );

}


