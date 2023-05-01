"use client";
import Link from "next/link";
import Image from "next/image";
import nicePic from "../../assets/nicePic.jpg";
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
      title: "Education",
    },
    {
      title: "Emergencies",
    },
    {
      title: "Environment",
    },
    {
      title: "Medical",
    },
    {
      title: "Utility Bills",
    },
  ];

  async function getContent() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    let temp = await pb.collection("fundraisers").getList(1, 4, {
      filter: "",
    });
    return temp.items;
  }

  useEffect(() => {
    getContent().then((res) => {
      setContent(res);
    });
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
                key={index}
                caption={item.title}
                description={item.caption}
                raised={"10"}
                goal={item.target}
                id={item.id}
                image={{ nicePic }}
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content
            .filter((item) => item.category === category)
            .map((item, index) => (
              <SmallCard
                title={item.title}
                caption={item.caption}
                img={item.img}
                key={index}
                dataFlow={item}
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

const SmallCard = ({ title, caption, img, dataFlow }) => {
  const dialog = useRef(null);

  function handleClick() {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }

  return (
    <div className="flex flex-col w-full rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-auto">
      <dialog ref={dialog}>
        <Donate data={dataFlow} />
      </dialog>
      <div className="relative h-48 w-full lg:h-56 lg:w-48">
        <Image
          src={img}
          className="h-full w-full rounded-t-lg object-cover"
          alt="Donation Img"
        />
      </div>
      <div className="flex flex-col p-4 leading-normal">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="mt-2 max-h-16 overflow-hidden overflow-ellipsis text-gray-500 lg:max-h-20">
          {resolveText(caption)}
        </h4>
      </div>
      <div className="my-6 flex w-full justify-center">
        <Button
          text="Let's Go!"
          type="primary"
          className="mt-auto w-full py-2"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

function Banner() {
  return (
    <>
      <div className={"h-full w-full"}>
        <Link href={"#"}>
          <div
            className={"rounded-xl"}
            style={{
              backgroundImage: `url(assets/photo.jpeg)`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
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
