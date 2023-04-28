import Card from "../global-components/Card";
export default function FeaturedPosts() {
  let propsCard1 = {
    id: "1",
    caption: "hello",
    description: "bro",
    raised: "100",
    goal: "1000",
    image: "./assets-landing/photo.jpeg",
  };
  return (
    <>
      <h1 className="tracking-tighter text-4xl font-black text-gray-900 dark:text-white">
        Featured Fundraisers
      </h1>
      <h2 className="tracking-tighter mt-2 text-gray-500 md:text-lg dark:text-gray-400">
        Help those who need you the most
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Card {...propsCard1} />
        <Card {...propsCard1} />
        <Card {...propsCard1} />
        <Card {...propsCard1} />
      </div>
    </>
  );
}
