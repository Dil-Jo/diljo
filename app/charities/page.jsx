import CharityCard from "./components/CharityCard";

export default function page() {
  return (
    <div className="w-full h-full ">
      <h1 className="text-start text-3xl font-bold tracking-tighter mx-2">
        Charities
      </h1>
      <div className="grid grid-cols-1 gap-10 mx-auto my-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
        <CharityCard data="data" />
      </div>
    </div>
  );
}
