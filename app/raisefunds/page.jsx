"use client";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Form1 from "./Components/Form1.jsx";
import Form2 from "./Components/Raisefund1.jsx";
import Form3 from "./Components/Raisefund2.jsx";

const RaiseFunds = () => {
  const [stage, setStage] = useState(1);
  const [fullForm, setFullForm] = useState({});
  useEffect(() => {
    document.querySelector("main").style.padding = "0";
  }, [stage]);
  const updateForm = async (form) => {
    setFullForm({ ...fullForm, ...form });
    console.log({ stage });
    if (stage === 4) {
      const formData = new FormData();
      formData.append("title", fullForm.title);
      formData.append("caption", fullForm.description);
      formData.append("target", fullForm.amount);
      formData.append(
        "owner",
        JSON.parse(localStorage.getItem("Login")).record.id
      );
      formData.append("coverPhoto", fullForm.image);
      formData.append("anonanonymityStatus", fullForm["radio-10"]);
      formData.append("thumbnail", fullForm.image);
      formData.append("category", fullForm.reason);
      formData.append("finalDate", "2025-12-1");

      const data = {
        title: fullForm.title,
        caption: fullForm.description,
        target: fullForm.amount,
        owner: JSON.parse(localStorage.getItem("Login")).record.id,
        coverPhoto: fullForm.image,
        anonanonymityStatus: fullForm["radio-10"],
        thumbnail: fullForm.image,
        category: fullForm.reason,
        finalDate: "2025-12-1",
      };
      console.log({ formData });

      const fetchStripe = await fetch("http://localhost:3000/api/add_product", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          name: fullForm.title,
        }),
      });
      const stripeId = await fetchStripe.json();
      console.log({ stripeId });
      if (stripeId.status) {
        data.stripeLink = stripeId.paymentLink.url;
        formData.append("stripeLink", stripeId.paymentLink.url);
      } else return alert("Something went wrong with stripe");

      const pb = new PocketBase("http://127.0.0.1:8090");
      const response = await pb.collection("fundraisers").create(formData);

      if (response.id) alert("Form submitted successfully");
      else alert("Form submission failed");
    }
  };
  useEffect(() => {
    updateForm({}).then((r) => console.log({ r }));
  }, [stage]);
  if (localStorage.getItem("Login") == null)
    return <div>Please Login First</div>;
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:bg-slate-400 rounded-l-3xl justify-center">
      <div className="md:w-2/6 w-full flex flex-col justify-center items-center">
        <MessageComponent stage={stage} />
      </div>
      <div className="md:w-4/6 w-full bg-slate-100 md:rounded-l-3xl md:shadow-xl">
        <Form updateForm={updateForm} setStage={setStage} stage={stage} />
      </div>
    </div>
  );
};

const MessageComponent = ({ stage }) => {
  const messages = [
    ["Let's lend a hand to someone,", "who really needs it."],
    ["Let's lend a hand to someone,", "who really needs it."],
    ["We make a living by what we get.", "We make a life by what we give."],
  ];
  if (stage > 3) stage = 3;
  return (
    <>
      <div className={"m-3"}>
        <h2 className="lg:text-4xl md:text-3xl text-4xl font-semi-bold text-center text-blue-900 tracking-tighter mb-5">
          {messages[stage - 1][0]}
        </h2>
        <h2 className="lg:text-3xl md:text-2xl text-3xl text-center text-slate-700 tracking-tighter">
          {messages[stage - 1][1]}
        </h2>
      </div>
    </>
  );
};

const Form = ({ stage, setStage, updateForm }) => {
  const nextStage = () => setStage(stage + 1);
  switch (stage) {
    case 1:
      return <Form1 stage={stage} next={nextStage} updateForm={updateForm} />;
    case 2:
      return <Form2 stage={stage} next={nextStage} updateForm={updateForm} />;
    case 3:
      return <Form3 stage={stage} next={nextStage} updateForm={updateForm} />;
    default:
      return <Finish />;
  }
};

const Finish = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter">
        Thank you for your contribution!
      </h1>
      <h1 className="text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter">
        Your contribution will help someone in need.
      </h1>
    </div>
  );
};
export default RaiseFunds;
