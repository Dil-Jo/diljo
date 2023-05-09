import WideCard from "../components/WideCard";

export default function page() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className={"w-full"}>
          <h1
            className={
              "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
            }
          >
            Donations
          </h1>
        </div>
        <div className={"h-full w-full flex flex-col"}>
          {items.map(() => (<WideCard />))}
        </div>
      </div>
    </>
  );
}

