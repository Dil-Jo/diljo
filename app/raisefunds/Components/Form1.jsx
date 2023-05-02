import { useState, useId } from "react";
import Button from "../../global-components/Button";

const Form1 = ({ next, updateForm }) => {
  const [form, setForm] = useState({ reason: "Emergency", "radio-10": "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form["radio-10"] === "" || form.reason === "")
      return alert("Please fill all the fields");
    updateForm(form);
    next();
  };
  return (
    <div className={"flex h-screen w-full items-center"}>
      <div className={"w-full"}>
        <form className="flex flex-col mx-24 " onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="reason"
              className="tracking-tighter font-black text-2xl text-gray-500 mr-6 mt-2 mb-5"
            >
              SELECT REASON FOR FUNDRAISING:
            </label>
            <select
              id="reason"
              name="reason"
              onChange={handleChange}
              className="py-3 px-4 pr-9 block w-full bg-white rounded-md text-lg sm:p-5"
            >
              <option value="Emergencies">Emergencies</option>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
              <option value="Enviornment">Environment</option>
              <option value="Utility Bills">Utility Bills</option>
            </select>
          </div>
          <div className="flex mt-11 flex-col">
            <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 mt-2 mb-5">
              POST AS:
            </h1>
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-6">
              <li>
                <input
                  type="radio"
                  id="visible"
                  name="radio-10"
                  value="visible"
                  className="hidden peer"
                  onChange={handleChange}
                />
                <label
                  htmlFor="visible"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Visible</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="anonymous"
                  name="radio-10"
                  value="anonymous"
                  className="hidden peer"
                  onChange={handleChange}
                />
                <label
                  htmlFor="anonymous"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 "
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">
                      Anonymous
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className={"flex justify-end"}>
            <Button type="primary" text={"Submit"}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form1;
