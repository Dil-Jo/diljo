import Button from "../../global-components/Button";
import Card from "../../global-components/Card";
import PocketBase from "pocketbase";

export default function page() {
  const getfundraisers = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  };
  const somecard = [1, 2, 3, 4, 5];
  // const [fundraisers, setFundraisers] = useState([]);
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className={"w-full"}>
          <h1
            className={
              "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
            }
          >
            Fundraisers
          </h1>
        </div>
        <div className={"h-full w-full grid gap-4 grid-cols-4"}>
          {somecard.map((card) => (<Card mode={"edit"} data={card} />))}
        </div>
      </div>
    </>);

}


