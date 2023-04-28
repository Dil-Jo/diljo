import Link from 'next/link';
import Image from 'next/image';
import reviewsImg from '../../assets/reviews.jpg';
import nicePic from '../../assets/nicePic.jpg';

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
		<div className='min-h-full w-full px-10'>
			<section className='flex flex-col gap-5'>
				<h1 className='font-bold text-2xl'>Explore Page</h1>
				<div className='flex gap-8'>
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
				</div>
			</section>
			<section className='flex flex-col gap-5 w-full'>
				<h1 className='font-bold text-2xl'>Explore Page</h1>
				<ExploreNav routes={routes} />
				<div className='flex flex-wrap gap-8 w-full'>
					{content.map((item) => (
						<SmallCard
							title={item.title}
							caption={text}
							img={item.img}
							link={item.link}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

const Card = ({ title, content, backgroundImg, link }) => {
	return (
		<div
			className='flex flex-col px-4 w-96 bg-blue-500 h-60 rounded justify-evenly'
			// style={{ backgroundImage: 'url(../../assets/nicePic.jpg)' }}
		>
			<h1 className='h-10 text-white text-lg font-bold'>{title}</h1>
			<h3 className='max-h-20 overflow-clip'>{content}</h3>
			<Link href={link} className='h-10'>
				Lets Goo!
			</Link>
		</div>
	);
};

const ExploreNav = ({ routes }) => {
	return (
		<div className='flex gap-4 justify-start'>
			{routes.map((subRoute, index) => {
				return (
					<div key={index}>
						<Link href={subRoute.link}>Visit Me!</Link>
					</div>
				);
			})}
		</div>
	);
};

const SmallCard = ({ title, caption, img, link }) => {
	return (
		<div className='flex w-2/5 h-40 rounded-md bg-orange-400 justify-between'>
			<div id='imgContainer' className='w-4/12 h-full flex items-center'>
				<Image src={img} className='w-full h-auto' alt='Donation Img' />
			</div>
			<div className='flex flex-col w-11/12 pl-8 gap-2 my-2'>
				<h3 className='font-bold text-lg'>{title}</h3>
				<h4 className='text-lg overflow-hidden max-w-full'>
					{caption}
				</h4>
				<Link href={link}>Visit Me!</Link>
			</div>
		</div>
	);
};

export default ExpolorePage;
