import Comp1 from "./Components/Raisefund1.jsx";
import Comp2 from "./Components/Raisefund2.jsx";
const RaiseFunds = () => {
  return (
    <>
      <div className="h-screen w-screen mt-8 flex bg-slate-400 rounded-l-3xl">
        <div className="w-2/6 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium text-slate-700 sm:text-4xl mb-8 tracking-tighter">Let's lend a hand to someone,</h2>
        <h2 className="text-3xl font-semi-bold text-blue-900 sm:text-5xl tracking-tighter">who really needs it.</h2>
        </div>
        <div className="w-4/6 bg-slate-300 rounded-l-3xl shadow-xl">
        <Comp1/>
        {/* <Comp2/> */}

        </div>
      </div>
    </>
  );
};
export default RaiseFunds;
