import Image from "next/image";
import pic from "../../assets/cat.jpeg";
const donate = (props) => {
  let progressbar = (raised, goal) => {
    return { width: `${(raised / goal) * 100}%` };
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className=" flex h-[50rem] w-[70rem] mt-4 ">
          <div className="bg-slate-500 h-full w-full rounded-l-xl flex flex-col justify-center items-center">
            <Image
              className="border-4 border-white h-5/6 w-5/6 bg-gray-700 flex flex-col justify-center items-center rounded-md max-h-5/6 max-w-5/6"
              src={props.image}
              alt="image here"
            />
          </div>
          <div className="bg-white h-full w-full rounded-r-xl flex flex-col items-center">
            <div className="description-box h-4/6 w-5/6 mt-12 flex flex-col justify-between py-6">
              <h1 className="text-3xl font-bold text-black ">
                {props.title}Help Save Kitty!
              </h1>
              <p className="mt-4 text-xl text-black h-full flex flex-col justify-center">
                {props.description}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora saepe ad iusto nihil, expedita quis porro quas!
                Obcaecati doloribus incidunt ab ex, perferendis rerum dolor
                quod? Aspernatur saepe facere reprehenderit.afdanfjkdsbjgfgno
                nanfldnsdlnflsndfnskldn lksdnfklsndlkfnsldn knsdklfnlkdsnfkn
                slnfdlkn
              </p>
            </div>
            <div className="h-2/6 w-5/6 mt-34">
              <div className="w-full mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className=" mt-15 bg-blue-600 h-2.5 rounded-full"
                  style={progressbar(props.raised, props.goal)}
                ></div>
                <h2 className="mt-2 text-end font-small text-gray-400">
                  {props.raised} / {props.goal} raised
                </h2>
                <div className="flex justify-end w-full">
                  <button
                    type="button"
                    class="mt-10 w-30 h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    class="mt-10 w-40 h-30 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default donate;
