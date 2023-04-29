export default function OutlineButton(props) {
  return (
    <>
      <button
        type="button"
        className="m-2 w-[calc(100%-1rem)] rounded-lg  border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
      >
        {props.text}
      </button>
    </>
  );
}
