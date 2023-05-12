"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../global-components/Button";
import { useRef, useEffect, useState } from "react";
import Card from "../global-components/Card";
import PocketBase from "pocketbase";
import Donate from "../global-components/Donate";

function resolveText(text) {
  return text.length > 100 ? text.substring(0, 100) + "..." : text;
}

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
    <div className="mt-5 flex min-h-full w-full flex-col gap-14 px-4">
      <div className="flex w-full flex-col gap-5">
        <Banner />
        <h1 className="text-start text-3xl font-bold tracking-tighter">
          Explore Page
        </h1>
        <h3 className="text-start text-2xl tracking-tighter  text-gray-500 dark:text-gray-400 md:text-lg">
          Explore Our Everlasting Collection of Chanda Program
        </h3>
        <div className="flex w-full gap-8">
          <div className="carousel-center carousel rounded-box w-full space-x-8 overflow-x-scroll p-4">
            {content.map((item, index) => (
              <Card
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" flex w-full flex-col gap-4">
        <ExploreNav
          routes={routes}
          changeCategory={setCategory}
          currentCategory={category}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-2 rounded-2xl border-gray-300 p-2">
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
    <div className="flex overflow-x-auto gap-8 text-lg font-bold">
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
    <div className="card card-compact w-96 min-[768px]:w-80 lg:w-72 xl:w-72 2xl:w-80 min-[1720px]:w-96 bg-gradient-to-r from-slate-50 to-zinc-100 shadow-lg p-3 border-2 border-slate-100">
      <figure className="relative w-full h-64 border-2 border-gray-300">
        <Image src={thumbnail}
          className="object-contain rounded-lg"
          alt="Thunmbail" fill={true} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="truncate">{caption}</p>
        <div className="card-actions justify-end">
          <Link href={`/donation/${id}`} className={"justify-center flex w-full"}>
            <Button
              text="Let's Go!"
              type="primary"
              className="mt-auto w-full py-2 "

            />
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
              backgroundImage: `url(assets/photo.jpeg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
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
