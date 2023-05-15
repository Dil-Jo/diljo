"use client";
import Image from "next/image";
import PocketBase from "pocketbase";
import pic from "../../assets/cat.jpeg";
import { useEffect, useState } from "react";

const getRaised = async (id) => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  // you can also fetch all records at once via getFullList
  const records = await pb.collection("donations").getFullList({
    filter: `fundraiser = "${id}"`
  });

  // console.log({ records })
  let total = 0;
  records.forEach((record) => {
    total += record.amount;
  });
  // console.log({ am })
  return total;

};
// const Donate =  (props) => {
export default function(props) {

  const { title, caption, thumbnail, target, id, link } = props;
  // const raised = 0
  const [raised, setRaised] = useState(0);
  useEffect(() => {

    getRaised(id).then((res) => {
      setRaised(res);
    });
  }, []);

  return (
    <div className="flex flex-col w-full h-auto relative items-center justify-center p-3 cursor-default">
      <div className="w-full h-96 relative ">
        <Image
          className="h-full w-auto object-cover rounded-2xl border-4 border-white"
          src={thumbnail}
          alt="image here"
          fill={true}

        />
      </div>

      <div className="flex h-full w-full flex-col items-center xl:rounded-r-xl rounded-r-none bg-white">
        <div className="description-box mt-6 flex xl:h-4/6 w-5/6 flex-col justify-between py-6">
          <h1 className="text-3xl font-bold text-black break-words">
            {title}
          </h1>
          <p className="mt-4 min-h-full text-ellipsis text-lg text-gray-700 break-words xl:overflow-auto">
            {caption}
          </p>
        </div>
        <div className="mt-34 xl:h-2/6 w-5/6">
          <progress className="progress progress-error w-full" value={raised} max={target}></progress>
          <h2 className="font-small mt-2 text-end text-gray-400">
            {raised} / {target} raised
          </h2>
          <div className="flex w-full justify-end pb-6 h-fit">
            <button
              type="button"
              className="w-30 h-30 mb-2 mr-2 mt-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 darkremoveocus:ring-green-800"
            >
              Share
            </button>
            <a
              type="button"
              href={link}
              target="_blank"
              className="h-30 mb-2 mr-2 mt-10 w-40 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 darkremoveocus:ring-green-800"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );

};
// export default Donate;
