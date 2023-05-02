"use client";
import { useState } from "react";
import Button from "../../global-components/Button";

const Comp2 = ({ next, updateForm }) => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [amount, setAmount] = useState("");
  const [acname, setAcname] = useState("");
  const [acnum, setAcnum] = useState("");
  const [formcp2, setForm] = useState({
    name: "",
    cnic: "",
    amount: "",
    acname: "",
    acnum: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateForm({
      ...formcp2,
      name: name,
      cnic: cnic,
      amount: amount,
      acname: acname,
      acnum: acnum,
    });
    next();
  };
  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <div className={"w-full"}>
        <form className="h-full grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <div>
              <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto text-center">
                {" "}
                ENTER DETAILS:
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 ml-8 mt-4">
              <div className="col-span-2">
                <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                  NAME:
                </h1>
                <input
                  type="text"
                  placeholder="Enter the name of the donee"
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                  CNIC:
                </h1>
                <input
                  type="text"
                  pattern="^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"
                  placeholder="e.g 35202-3156628-9"
                  onChange={(e) => setCnic(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="col-span-2">
                <div className="form-control">
                  <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                    TARGET AMOUNT:
                  </h1>
                  <div>
                    <label className="input-group w-86 ">
                      <span>PKR</span>
                      <input
                        type="text"
                        placeholder="e.g 1000"
                        onChange={(e) => setAmount(e.target.value)}
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-8">
                  <div className="col-span-2">
                    <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                      ACCOUNT NUMBER:
                    </h1>
                    <input
                      type="text"
                      placeholder="Enter the name of recipient account"
                      onChange={(e) => setAcname(e.target.value)}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto ">
                      IBAN:
                    </h1>
                    <input
                      type="text"
                      pattern="^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$"
                      placeholder="e.g PK36SCBL0000001123456702"
                      onChange={(e) => setAcnum(e.target.value)}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-end mt-7 mr-8">
            <Button type={"primary"} text={"Submit"}></Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Comp2;
