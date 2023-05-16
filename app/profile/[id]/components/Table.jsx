import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import GlobalContext from "../../../Contexts/GlobalContext";

const Table = ({ headings, rows, tableName }) => {
  const { pb } = useContext(GlobalContext);
  console.log({ headings, rows });
  if (tableName === "fundraisers")
    return (
      <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
        <table className="table w-full rounded-md  ">
          <thead>
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="font-bold"
                style={{ position: "static" }}
              >
                {heading}
              </th>
            ))}
            <th></th>
          </tr>
          </thead>
          <tbody className="">
          {rows.map((row, index) => (
            <tr key={index} className="">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={row.thumbnail}
                        alt="Thumbnail"
                        fill
                      />
                      {/* <Image src='https://pocketbase-production-fba8.up.railway.app/api/files/hnegkanjgczax8z/s4hg3mounz9ih6x/portrait_pic_YSVQd3qhi4.jpg?token=' alt="Thumbnail" fill /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {row[headings[0].toLowerCase()]}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className="max-w-xs inline-block max-h-20 truncate">
                  {row[headings[1].toLowerCase()]}
                </p>
              </td>
              <td className={"truncate"}>
                {row[headings[2].toLowerCase()]}
              </td>
              <td className={"truncate"}>
                {row[headings[3].toLowerCase()]}
              </td>
              <td>
                <Link
                  href={row.link || ""}
                  className="bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center"
                >
                  Details
                </Link>
                {!row.complete &&
                  <>
                    <label
                      htmlFor={row.id}
                      className=" rounded-md text-red-500 border-2 cursor-pointer font-semibold text-md transition-all duration-200 hover:text-red-700 text-center w-full inline-block"
                    >
                      End Fundraiser
                    </label>
                    <>
                      <input
                        type="checkbox"
                        id={row.id}
                        className="modal-toggle"
                      />
                      <div className="modal model-open">
                        <div className="modal-box relative">
                          <label
                            htmlFor={row.index}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="font-bold text-lg">
                            Are you sure you want to
                            delete this fundraiser
                          </h3>
                          
                          <div className="modal-action">
                            <label
                              onClick={() =>
                                handleDelete(
                                  row.id,
                                  pb
                                )
                              }
                              htmlFor={row.id}
                              className="btn"
                            >
                              Confirm
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  </>
                }
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  else if (tableName === "Volunteer History") {
    return (
      <div className="w-full border-2 border-slate-200 rounded-xl">
        <table className="table w-full rounded-md">
          <thead>
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="font-bold"
                style={{ position: "static" }}
              >
                {heading}
              </th>
            ))}
          </tr>
          </thead>
          <tbody className="">
          {rows.map((row, index) => (
            <tr key={index} className="">
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">
                      {row[headings[0].toLowerCase()]}
                    </div>
                    <div className="text-sm opacity-50">
                      {row.category}
                    </div>
                  </div>
                </div>
              </td>
              <td className="truncate">
                {row[headings[1].toLowerCase()]}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  } else
    return (
      <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
        <table className="table w-full rounded-md  ">
          {/* head */}
          <thead>
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="font-bold"
                style={{ position: "static" }}
              >
                {heading}
              </th>
            ))}
            <th></th>
          </tr>
          </thead>
          <tbody className="">
          {rows.map((row, index) => (
            <tr key={index} className="">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={row.thumbnail}
                        alt="Thumbnail"
                        fill
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {row[headings[0].toLowerCase()]}
                    </div>
                    {/* <div className="text-sm opacity-50">{row.categories[0]}</div> */}
                  </div>
                </div>
              </td>
              {/* <td className='max-w-xs whitespace-nowrap truncate '> */}
              <td>
                <p className="max-w-xs inline-block max-h-20 truncate">
                  {row[headings[1].toLowerCase()]}
                </p>
                <p className="inline">...</p>
              </td>
              <td className={"truncate"}>
                {row[headings[2].toLowerCase()]}
              </td>
              <td>
                <Link
                  href={row.link || ""}
                  className="bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
};

const handleDelete = async (id, pb) => {
  try {
    // const res = await pb.collection('fundraisers').delete(id);
    const res = await pb.collection("fundraisers").update(id, {
      complete: true
    });
    alert("Fundraiser deleted successfully. Refreshing page...");
    window.location.reload();
  } catch (error) {
    console.log({ error });
    alert("Error deleting fundraiser");
  }
};

export default Table;
