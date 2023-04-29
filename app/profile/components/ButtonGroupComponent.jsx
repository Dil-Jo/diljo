export default function ButtonGroupComponent(props) {
  return (
    <div className="group mx-auto mt-10 grid w-full max-w-md cursor-pointer place-items-center rounded-xl p-10 pb-8 shadow-lg ">
      <div className="m-10 h-full w-full rounded-lg bg-cyan-950 outline outline-1 outline-gray-300">
        <button
          type="button"
          class="m-2 w-[calc(100%-1rem)] rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
        >
          
        </button>
      </div>
    </div>
  );
}
