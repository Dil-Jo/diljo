import Link from "next/link";

export default function Banner() {
  return (
    <div className={"mb-6 h-full w-full"}>
      <Link href={"#"}>
        <div
          className={"rounded-xl bg-no-repeat bg-center bg-cover w-full"}
          style={{
            backgroundImage: `url(assets/photo.jpeg)`,
          }}
        >
          <div className={"h-[30rem] w-full rounded-xl"}>
            <div
              className={
                "flex h-full w-full rounded-xl bg-gray-950 bg-opacity-40"
              }
            >
              <div className={"m-10"}>
                <h1
                  className={
                    "my-auto  text-start text-3xl font-bold tracking-tighter text-white lg:text-5xl"
                  }
                >
                  OUR MISSION
                </h1>
                <h1
                  className=
                  "my-auto text-start tracking-tighter text-white md:mt-10 md:text-2xl lg:m-6 lg:mt-14 lg:text-3xl font-light leading-loose">
                  At Dil-Jo, our mission is to spread love and kindness through the power of giving. We believe that by connecting individuals and organizations with causes they care about, we can make a positive impact on the world. Our platform provides a simple and secure way to donate to charities and non-profit organizations, and we strive to inspire a culture of compassion and generosity. With every donation, we aim to create a ripple effect of love and hope, and we invite you to join us in our mission to make the world a better place.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
