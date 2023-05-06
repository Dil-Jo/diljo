import Image from "next/image";
import pic from "../../assets/cat.jpeg";

const Donate = (props) => {
  let progressbar = (raised, goal) => {
    return { width: `${(raised / goal) * 100}%` };
  };

  return (
    <div className={""}>
      <div className="flex w-full h-[50rem] items-center justify-center">
        <Image
          className="h-full w-full bg-no-repeat bg-cover bg-fixed rounded-md border-4 border-white bg-gray-700"
          src={props.data.image}
          alt="image here"
        />
        <div className="flex h-full w-full flex-col mb-10 items-center rounded-r-xl bg-white">
          <div className="description-box mt-12 flex h-4/6 w-5/6 flex-col justify-between py-6">
            <h1 className="text-3xl font-bold text-black break-words">
              {props.data.title}
            </h1>
            <p className="mt-4 h-full text-ellipsis text-xl text-gray-700 break-words overflow-auto">
              {props.data.caption}
            </p>
          </div>
          <div className="mt-34 h-2/6 w-5/6">
            <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className=" mt-15 h-2.5 rounded-full bg-blue-600"
                style={progressbar(props.data.raised, props.data.goal)}
              ></div>
              <h2 className="font-small mt-2 text-end text-gray-400">
                {props.data.raised} / {props.data.goal} raised
              </h2>
              <div className="flex w-full justify-end">
                <button
                  type="button"
                  className="w-30 h-30 mb-2 mr-2 mt-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Share
                </button>
                <a
                  type="button"
                  href={props.data.link}
                  target="_blank"
                  className="h-30 mb-2 mr-2 mt-10 w-40 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
