'use client';
import Link from 'next/link';
import Image from 'next/image';
import reviewsImg from '../../assets/reviews.jpg';
import nicePic from '../../assets/nicePic.jpg';
import Button from '../global-components/Button';
import Donate from '../Components/Banner';
import { useState } from 'react';

const ExpolorePage = () => {
	const routes = [
		{
			title: 'title',
			link: 'link',
		},
		{
			title: 'title2',
			link: 'link3',
		},
	];
	const content = [
		{
			title: 'Help Jinx with Dental Surgery!',
			caption:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
			img: reviewsImg,
			link: 'link',
		},
		{
			title: 'Help Jinx with Dental Surgery!',
			caption:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
			img: reviewsImg,
			link: 'link',
		},
		{
			title: 'Help Jinx with Dental Surgery!',
			caption:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
			img: reviewsImg,
			link: 'link',
		},
		{
			title: 'Help Jinx with Dental Surgery!',
			caption:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
			img: reviewsImg,
			link: 'link',
		},
	];

	const [category, setCategory] = useState('title');

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
		<div className='flex min-h-full w-full flex-col gap-14 px-10'>
			<section className='flex w-full flex-col gap-5'>
				<h1 className='text-center text-2xl font-bold'>Explore Page</h1>
				<h3 className='text-center text-2xl font-bold'>
					Explore Our Everlasting Collection of Chanda Program
				</h3>
				<div className='flex w-full gap-8'>
					<div className='carousel-center carousel rounded-box w-full space-x-8  p-4'>
						<Card
							title='Help Jinx with Dental Surgery!'
							content={text}
							link='link'
							key='1'
							backgroundImg={nicePic}
						/>
						<Card
							title='Help Jinx with Dental Surgery!'
							content={text}
							link='link'
							key='2'
							backgroundImg={nicePic}
						/>
						<Card
							title='Help Jinx with Dental Surgery!'
							content={text}
							link='link'
							key='2'
							backgroundImg={nicePic}
						/>
						<Card
							title='Help Jinx with Dental Surgery!'
							content={text}
							link='link'
							key='2'
							backgroundImg={nicePic}
						/>
						<Card
							title='Help Jinx with Dental Surgery!'
							content={text}
							link='link'
							key='2'
							backgroundImg={nicePic}
						/>
					</div>
				</div>
			</section>
			<section className='flex w-full flex-col gap-5'>
				{/* <h1 className='font-bold text-2xl'>Explore Page</h1> */}
				<ExploreNav
					routes={routes}
					changeCategory={setCategory}
					currentCategory={category}
				/>
				<div className='flex w-full flex-wrap gap-8'>
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
			</section>
		</div>
	);
};

const Card = ({ title, content, backgroundImg, link }) => {
	// return (
	// <div className='flex h-60 w-96 flex-col justify-evenly rounded bg-blue-500 px-4 text-white'>
	// 	<h1 className='h-10 text-lg font-bold text-white'>{title}</h1>
	// 	<h3 className='max-h-20 overflow-clip'>{content}</h3>
	// 	<Button link={link} text='Lets Goo!' type='primary' />
	// </div>
	// );

	return (
		<div className='carousel-item'>
			<div className='flex h-60 w-96 flex-col justify-evenly rounded bg-blue-500 px-4 text-white'>
				<h1 className='h-10 text-lg font-bold text-white'>{title}</h1>
				<h3 className='max-h-20 overflow-clip'>{content}</h3>
				<Button link={link} text='Lets Goo!' type='primary' />
			</div>
		</div>
	);
};

const ExploreNav = ({ routes, changeCategory, currentCategory }) => {
	return (
		<div className='flex justify-start gap-6 text-lg font-bold'>
			{routes.map((subRoute, index) => {
				const styler =
					currentCategory === subRoute.title ? 'w-full' : 'w-0';
				return (
					<div
						key={index}
						className='group text-gray-600'
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
		<div className='flex h-40 w-2/5 justify-between rounded-md border-b-4 border-r-4 border-gray-400'>
			<div id='imgContainer' className='flex h-full w-4/12 items-center'>
				<Image src={img} className='h-auto w-full' alt='Donation Img' />
			</div>
			<div className='my-2 flex w-11/12 flex-col gap-2 pl-8'>
				<h3 className='text-lg font-bold'>{title}</h3>
				<h4 className='max-w-full overflow-hidden text-gray-500'>
					{caption}
				</h4>
				<Button
					// link={link}
					onClick={() => console.log("fe")}
					text='Lets Goo!'
					type='primary'
				/>

				{/* <Link href={link}>Visit Me!</Link> */}
			</div>
		</div>
	);
};

export default ExpolorePage;
