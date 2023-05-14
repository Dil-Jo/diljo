"use client"
import { useContext } from "react";
import GlobalContext from "../../../Contexts/GlobalContext";
import Table from "../components/Table";

export default function page() {
  const { pb } = useContext(GlobalContext);
  let id = pb.authStore.model.id;
  
  const getVolunteerHistory = async () => {
    const volunteer = await pb.collection("user_volunteers").getFullList({ filter: `users='${id}'` });
    
    const output = volunteer.map((volunteer) => ({
      id: volunteer.id,
      user: volunteer.user,
      drives: volunteer.drives,
    }));
    
    let userStuff = await pb.collection("users").getFullList({ filter: `id='${output[0].user}'` });
    let drives = await pb.collection("volunteers").getFullList({ filter: `id='${output[0].drives}'` });
    
    return {
      Organizer: userStuff[0].username,
      Title: drives[0].title,
      Category: drives[0].category,
      Id: output[0].id,
    };
  };
  
  const fetchData = async () => {
    const data = await getVolunteerHistory();
    const props = {
      headings: ['Title', 'Category', 'Organizer'],
      rows: [data],
    };
    console.log(props)
    return props;
    
  };
  
  const renderTable = async () => {
    const props = await fetchData();
    console.log(props)
    return <Table {...props} />;
  };
  
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg bg-white">
        <div className={"w-full"}>
          <h1
            className={
              "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
            }
          >
            Volunteer History
          </h1>
        </div>
        <div className={"h-full w-full flex flex-col"}>{renderTable()}</div>
      </div>
    </>
  );
}

