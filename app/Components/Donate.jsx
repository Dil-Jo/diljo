import Image from "next/image";
import pic from "../../assets/cat.jpeg";

const Donate = (props) => {
  let progressbar = (raised, goal) => {
    return { width: `${(raised / goal) * 100}%` };
  };

  return (
    <div
      className="flex min-h-full w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] z-10 items-center justify-center"
      onClick={(e) => {
        props.setDisplayModal(false);
      }}
    >
      <div
        className=" mt-4 flex h-11/12 w-3/5 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full w-1/2 flex-col items-center justify-center rounded-l-xl bg-slate-500">
          <Image
            className="flex h-5/6 w-5/6 flex-col items-center justify-center rounded-md border-4 border-white bg-gray-700"
            src={pic}
            alt="image here"
          />
        </div>
        <div className="flex w-1/2 flex-col rounded-r-xl px-4 bg-white">
          <h1 className="text-3xl font-bold text-black ">{props.title}</h1>
          <p className="mt-4 flex h-full flex-col justify-center text-xl text-black">
            {props.caption}
          </p>

          <div
            className=" mt-15 h-2.5 w-96 rounded-full bg-blue-600"
            style={progressbar(props.raised, props.goal)}
          ></div>
          <h2 className="font-small mt-2 text-end text-gray-400">
            {props.raised} / {props.goal} raised
          </h2>
          <div className="flex w-full justify-end">
            <button
              type="button"
              className="w-30 h-30 mb-2 mr-2 mt-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
            >
              Share
            </button>
            <button
              type="button"
              className="h-30 mb-2 mr-2 mt-10 w-40 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
