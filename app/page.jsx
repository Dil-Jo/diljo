import FeaturedPosts from "./index-components/FeaturedPosts";
import About from "./index-components/About";
import Main from "./index-components/Main";
import Navbar from "./global-components/Navbar";
import Banner from "./index-components/Banner";

export default function Page() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="mx-4 mt-6">
        <Banner />
        <FeaturedPosts />
        <About />
      </div>
    </>
  );
}
