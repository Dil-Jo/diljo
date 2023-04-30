'use client'
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import Form1 from "./Components/Form1.jsx";
import Form2 from "./Components/Raisefund1.jsx";
import Form3 from "./Components/Raisefund2.jsx";


async function submitForm(data) {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('fundraisers').create(data);
  return record;
}

const RaiseFunds = () => {
  const [stage, setStage] = useState(1);
  const [fullForm, setFullForm] = useState({});
  const updateForm = async (form) => {
    setFullForm({ ...fullForm, ...form })
    console.log({ stage })
    if (stage === 4) { //Submit the data to the server
      // temporary user 
      const user = {
        id: 'fsg3aqlbwbfkn7q'
      }
      const data = {
        title: fullForm.title,
        caption: fullForm.description,
        target: fullForm.amount,
        owner: user.id,
        coverPhoto: fullForm.image,
        anonanonymityStatus: fullForm['radio-10'],
        category: fullForm.reason,
        finalDate: '2025-12-1'
      }
      console.log({ data })

      const response = await submitForm(data);
      if (response.id) alert('Form submitted successfully');
      else alert('Form submission failed');

    }
  }
  useEffect(() => {
    updateForm({})
  }, [stage])
  // const [messages, setMessages] = useState([])
  // const [reason1, setReason] = useState("");
  // const [form, setForm] = useState({
  //   reason: ""
  // });
  // function onSubmit() {
  //   setForm({ ...form.reason = reason1 });
  // }

  return (
    <div className="h-screen w-screen mt-8 flex bg-slate-400 rounded-l-3xl">
      <div className="w-2/6 flex flex-col justify-center items-center">
        <MessageComponent stage={stage} />
      </div>
      <div className="w-4/6 bg-slate-300 rounded-l-3xl shadow-xl">
        {true && <Form updateForm={updateForm} setStage={setStage} stage={stage} />}
      </div>
    </div>
  )
};



const MessageComponent = ({ stage }) => {
  const messages = [["Let's lend a hand to someone,", "who really needs it."], ["Let's lend a hand to someone,", "who really needs it."], ["We make a living by what we get.", "We make a life by what we give."]]
  if (stage > 3) stage = 3;
  return (
    <>
      <h2 className="text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter">{messages[stage - 1][0]}</h2>
      <h2 className="text-3xl font-semi-bold  text-blue-900 sm:text-5xl tracking-tighter">{messages[stage - 1][1]}</h2>
    </>
  )

}

const Form = ({ stage, setStage, updateForm }) => {
  const nextStage = () => setStage(stage + 1);
  switch (stage) {
    case 1:
      return <Form1 stage={stage} next={nextStage} updateForm={updateForm} />
      break;
    case 2:
      return <Form2 stage={stage} next={nextStage} updateForm={updateForm} />
      break;
    case 3:
      return <Form3 stage={stage} next={nextStage} updateForm={updateForm} />
      break;
    default:
      // return <Form1 stage={stage} next={nextStage} updateForm={updateForm} />
      return <Finish />
      break;
  }
}

const Finish = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter">Thank you for your contribution!</h1>
      <h1 className="text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter">Your contribution will help someone in need.</h1>
    </div>
  )
}
export default RaiseFunds;
