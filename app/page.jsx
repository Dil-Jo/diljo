import FeaturedPosts from './index-components/FeaturedPosts';
import About from './index-components/About';
import Main from './index-components/Main';
import Navbar from './global-components/Navbar';
import Footer from './global-components/Footer';
import Signin from './global-components/Signin';

export default function Page() {
	return (
		<>
			{/* <Navbar /> */}
			<Main />
			<div className='mx-4 mt-6'>
				<FeaturedPosts />
				<About />
			</div>
			{/* <Footer /> */}
		</>
	);
}
