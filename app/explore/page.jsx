"use client";
import Link from "next/link";
import Image from "next/image";
import reviewsImg from "../../assets/reviews.jpg";
import nicePic from "../../assets/nicePic.jpg";
import Button from "../global-components/Button";
import { useState } from "react";
import Card from "../global-components/Card";
function resolveText(text) {
  return text.length > 100 ? text.substring(0, 100) + "..." : text;
}
const ExpolorePage = () => {
  const routes = [
    {
      title: "title",
      link: "link",
    },
    {
      title: "title2",
      link: "link3",
    },
  ];
  const content = [
    {
      title: "Help Jinx with Dental Surgery!",
      caption:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      img: reviewsImg,
      link: "link",
    },
    {
      title: "Help Jinx with Dental Surgery!",
      caption:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      img: reviewsImg,
      link: "link",
    },
    {
      title: "Help Jinx with Dental Surgery!",
      caption:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      img: reviewsImg,
      link: "link",
    },
    {
      title: "Help Jinx with Dental Surgery!",
      caption:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      img: reviewsImg,
      link: "link",
    },
  ];

  const [category, setCategory] = useState("title");

  const text = `
	We have a wonderful 14 year old cat named Jinx who has given us no vet troubles in the 14 years I've owned him.
	My husband Mitch and I noticed a few days ago his face was swollen and hard on the one side and Jinx wasn't eating his hard food much anymore. I opened his mouth, and what looked to be a nasty hole in his gum with infection coming out of it.
	The next day, I took Jinx to the vet and they said it could be a tooth root still in his gum and became infected or… a chance of cancer.
	He is currently on a month of antibiotics and 14 days of Metacam (painkiller). In two weeks, we will have to follow up with his healing progress and will have to see what's going on in his mouth.
	This procedure could be up to a $2000.00 for bloodwork, general anesthesia, X-rays, dental extraction and medication.
	Which is quite a costly, unexpected bill!!
	We are asking for Help! 
	We are trying to make him comfortable right now and ensuring he is getting his antibiotic and painkiller treatment. He's trying so hard to fight.
	We need to be prepared for this upcoming surgery and anything you can donate will help us greatly towards the cost of this procedure!
	Thank you from the bottom of our hearts!
	Tia, Mitch, Jinx & Luna `;

  return (
    <div className="flex min-h-full w-full flex-col gap-14 px-10 mt-5">
      <div className="flex w-full flex-col gap-5">
        <h1 className="text-start text-3xl font-bold tracking-tighter">
          Explore Page
        </h1>
        <h3 className="text-start text-2xl tracking-tighter  text-gray-500 dark:text-gray-400 md:text-lg">
          Explore Our Everlasting Collection of Chanda Program
        </h3>
        <div className="flex w-full gap-8">
          <div className="carousel-center carousel rounded-box w-full space-x-8 overflow-x-scroll p-4">
            <Card
              key="1"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
            <Card
              key="2"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
            <Card
              key="3"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
            <Card
              key="4"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
            <Card
              key="5"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
            <Card
              key="6"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />{" "}
            <Card
              key="7"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />{" "}
            <Card
              key="8"
              caption="Help Jinx with Dental Surgery!"
              description={resolveText(text)}
              link="link"
              raised="1"
              goal="10"
              id="DLKFJSALK12321432"
              image={nicePic}
            />
          </div>
        </div>
      </div>
      <div className="mx-2 flex w-full flex-col gap-4">
        {/* <h1 className='font-bold text-2xl'>Explore Page</h1> */}
        <ExploreNav
          routes={routes}
          changeCategory={setCategory}
          currentCategory={category}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.map((item, index) => (
            <SmallCard
              title={item.title}
              caption={text}
              img={item.img}
              link={item.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// const Card = ({ title, content, backgroundImg, link }) => {
//   // return (
//   // <div className='flex h-60 w-96 flex-col justify-evenly rounded bg-blue-500 px-4 text-white'>
//   // 	<h1 className='h-10 text-lg font-bold text-white'>{title}</h1>
//   // 	<h3 className='max-h-20 overflow-clip'>{content}</h3>
//   // 	<Button link={link} text='Lets Goo!' type='primary' />
//   // </div>
//   // );

//   return (
//     <div className="carousel-item">
//       <div className="flex h-60 w-96 flex-col justify-evenly rounded bg-blue-500 px-4 text-white">
//         <h1 className="h-10 text-lg font-bold text-white">{title}</h1>
//         <h3 className="max-h-20 overflow-clip">{content}</h3>
//         <Button link={link} text="Lets Goo!" type="primary" />
//       </div>
//     </div>
//   );
// };

const ExploreNav = ({ routes, changeCategory, currentCategory }) => {
  return (
    <div className="flex justify-start gap-6 text-lg font-bold">
      {routes.map((subRoute, index) => {
        const styler = currentCategory === subRoute.title ? "w-full" : "w-0";
        return (
          <div
            key={index}
            className="group text-gray-600"
            onClick={() => changeCategory(subRoute.title)}
          >
            <button>Visit Me!</button>
            <div
              className={`h-1 w-0 bg-black transition-all group-hover:w-full ${styler}`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

const SmallCard = ({ title, caption, img, link }) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-auto">
      <div className="relative h-56 w-full lg:h-auto lg:w-48">
        <Image
          src={img}
          className="h-full w-full rounded-t-lg object-cover lg:rounded-l-lg lg:rounded-t-none"
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
          link={link}
          text="Let's Go!"
          type="primary"
          className="mt-auto w-full py-2"
        />
      </div>
    </div>
  );
};

export default ExpolorePage;
