"use client";
export default function Main() {
  function clickCoolButton() {
    const scrollHeight = window.innerHeight - 50;
    const element = document.querySelector("#coolscrolldownbutton");

    if (
      document.body.scrollTop === scrollHeight ||
      document.documentElement.scrollTop === scrollHeight
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="-mt-[4.49rem] grid h-screen w-full place-items-end bg-black">
      <div className="flex w-full justify-center">
        <div
          className="mb-14 h-16 w-16 transform rounded-full outline-dotted outline-4  outline-white duration-500 hover:-translate-y-3"
          id="coolscrolldownbutton"
          onClick={clickCoolButton}
        >
          <svg
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="mx-auto mt-4 h-10 w-10"
            viewBox="0 0 30.727 30.727"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
        l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
