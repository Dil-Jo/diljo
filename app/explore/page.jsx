"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Card from "../global-components/Card";
import PocketBase from "pocketbase";



const ExpolorePage = () => {
  const routes = [
    {
      title: "Education"
    },
    {
      title: "Emergencies"
    },
    {
      title: "Environment"
    },
    {
      title: "Medical"
    },
    {
      title: "Utility Bills"
    }
  ];

  async function getContent() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    let temp = await pb.collection("fundraisers").getList(1, 4);
    // console.log({ temp })
    const output = temp.items.map((item) => {
      return {
        title: item.title,
        caption: item.caption,
        target: item.target,
        id: item.id,
        thumbnail: pb.files.getUrl(item, item.thumbnail),
        category: item.category,
        link: item.link
      };
    });
    // console.log({ output });
    return output;
  }

  useEffect(() => {
    getContent().then((res) => {
      setContent(res);
    });
    console.log({ content });
  }, []);

  const [content, setContent] = useState([]);
  const [category, setCategory] = useState("title");
  return (
    <div className="mt-5 flex min-h-full w-full flex-col gap-6 px-4">
      <div className="flex w-full flex-col gap-5">
        <Banner />
        <h1 className="text-start text-3xl font-bold tracking-tighter">
          Featured Fundraisers
        </h1>
        <div className="flex w-full ">
          <div className="carousel-center carousel rounded-box w-full space-x-8 overflow-x-scroll p-4 pt-0">
            {content.map((item, index) => (
              <Card
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={"h-full w-full flex"}>
        <h1 className={"text-start text-3xl font-bold tracking-tighter"}>Explore By Category</h1>
      </div>
        <div className=" flex w-full flex-col gap-4">
        <ExploreNav
          routes={routes}
          changeCategory={setCategory}
          currentCategory={category}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-2 place-items-center rounded-2xl border-gray-300 p-2">
          {content
            .filter((item) => item.category === category)
            .map((item, index) => (
              <SmallCard
                key={index}
                {...item}
              // dataFlow={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
const ExploreNav = ({ routes, changeCategory, currentCategory }) => {
  useEffect(() => {
    if ("Education") {
      changeCategory("Education");
    }
  }, ["Education", changeCategory]);
  return (
    <div className="flex overflow-x-auto text-lg font-bold gap-8">
      {routes.map((subRoute, index) => {
        const styler = currentCategory === subRoute.title ? "w-full" : "w-0";
        return (
          <div
            key={index}
            className="group text-gray-600"
            onClick={() => changeCategory(subRoute.title)}
          >
            <button>{subRoute.title}</button>
            <div
              className={`h-1 w-0 bg-black transition-all group-hover:w-full ${styler}`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
const SmallCard = (props) => {
  const { title, caption, thumbnail, id } = props;
  return (
    <div className="card card-compact w-full bg-gradient-to-r from-slate-50 to-zinc-100 shadow-lg p-3 border-2 border-slate-100">
      <figure className="relative w-full h-64 border-2 border-gray-300">
        <Image src={thumbnail}
          className="object-contain rounded-lg"
          alt="Thunmbail" fill={true} />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate overflow-ellipsis">{title}</h2>
        <p className="truncate">{caption}</p>
        <div className="card-actions justify-center">
          <Link href={`/donation/${id}`} className={"bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-eleven"}
          >
          Donate
          </Link>
        </div>
      </div>
    </div>
  );
};

function Banner() {
  return (
    <>
      <div className={"h-full w-full"}>
        <Link href={"/charities"}>
          <div
            className={"rounded-xl"}
            style={{
              backgroundImage: `url(assets/hearthands.webp)`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`
            }}
          >
            <div className={"h-52 w-full cursor-pointer rounded-xl"}>
              <div
                className={
                  "flex h-full w-full rounded-xl bg-gray-950 bg-opacity-40"
                }
              >
                <div className={"md:w-full"}></div>
                <h1
                  className={
                    "my-auto text-start text-6xl font-bold tracking-tighter text-white sm:text-7xl"
                  }
                >
                  Donate to Charities.
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ExpolorePage;
