import Link from "next/link";

export default function Banner() {
  return (
    <div className={"mb-6 h-full w-full"}>
      <Link href={"/"}>
        <div
          className={"rounded-xl"}
          style={{
            backgroundImage: `url(assets/photo.jpeg)`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
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
                  aughhhh
                </h1>
                <h1
                  className={
                    "md:6  my-auto text-start tracking-tighter text-gray-300 md:mt-10 md:text-xl lg:m-6 lg:mt-14 lg:text-2xl"
                  }
                >
                  some random text here, some random text here, some random text
                  here, some random text here, some random text here, some
                  random text here, some random text here, some random text
                  here, some random text here, some random text here, some
                  random text here, some random text here, some random text
                  here, some random text here, some random text here, some
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
