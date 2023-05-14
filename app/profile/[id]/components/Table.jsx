import Image from 'next/image'
import React from 'react'

// We assume that the order of the headings and the rows is same and that each row is an object with keys from heading. And theres an extra object key title, not in the headings, which is the title of the card
// This would surely work for out fundraisers, idk the rest for now

const Table = ({ headings, rows, tableName }) => {
console.log({ headings, rows })
    if (tableName === "fundraisers")
        return (
            <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
                <table className="table w-full rounded-md  ">
                    <thead>
                        <tr>
                            {headings.map((heading) => (
                                <th key={heading} className="font-bold">
                                    {heading}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            rows.map((row, index) => (
                                <tr key={index} className=''>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={row.thumbnail} alt="Thumbnail" fill />
                                                    {/* <Image src='https://pocketbase-production-fba8.up.railway.app/api/files/hnegkanjgczax8z/s4hg3mounz9ih6x/portrait_pic_YSVQd3qhi4.jpg?token=' alt="Thumbnail" fill /> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{row[headings[0].toLowerCase()]}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='max-w-xs inline-block max-h-20 truncate'>{row[headings[1].toLowerCase()]}</p>
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[2].toLowerCase()]}
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[3].toLowerCase()]}
                                    </td>
                                    <td>
                                        <button
                                          className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
                                        >Details</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    else
        return (
            <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
                <table className="table w-full rounded-md  ">
                    {/* head */}
                    <thead>
                        <tr>
                            {headings.map((heading) => (
                                <th key={heading} className="font-bold">
                                    {heading}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            rows.map((row, index) => (
                                <tr key={index} className=''>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={row.thumbnail} alt="Thumbnail" fill />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{row[headings[0].toLowerCase()]}</div>
                                                {/* <div className="text-sm opacity-50">{row.categories[0]}</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* <td className='max-w-xs whitespace-nowrap truncate '> */}
                                    <td >
                                        <p className='max-w-xs inline-block max-h-20 truncate'>{row[headings[1].toLowerCase()]}</p><p className='inline'>...</p>
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[2].toLowerCase()]}
                                    </td>
                                    <td>
                                        <button
                                          className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
                                        >Details</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default Table