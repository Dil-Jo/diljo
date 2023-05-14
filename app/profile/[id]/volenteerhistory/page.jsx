"use client";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Contexts/GlobalContext";
import Table from "../components/Table";

export default function Page() {
  const { pb } = useContext(GlobalContext);
  const id = pb.authStore.model.id;
  
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const volunteer = await pb.collection("user_volunteers").getFullList({
        filter: `users='${id}'`,
        expand: "drives.organizer, drives"
      });
      
      const mappedData = volunteer.map((volunteer) => ({
        title: volunteer.expand.drives.title,
        organizer: volunteer.expand.drives.expand.organizer.username,
        category: volunteer.expand.drives.category[0]
      }));
      
      setData({
        headings: ['Title', 'Organizer'],
        rows: mappedData,
        tableName: 'Volunteer History'
      });
    };
    
    fetchData();
  }, [pb, id]);
  
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg bg-white">
        <div className="w-full">
          <div className={"pb-8"}>
          <h1 className="text inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto">
            Volunteer History
          </h1>
          </div>
          </div>
          
        <div className="h-full flex flex-col w-full overflow-x-auto">
          {data && <Table className="border border-black " headings={data.headings} rows={data.rows} tableName={data.tableName} />}
        </div>
      </div>
    </>
  );
}
