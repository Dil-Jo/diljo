export default function (props) {
  
  return (
  <>
    <div className="toast">
      <div className="bg-two rounded-3xl py-2 px-4">
        <div>
          <span className={"text-white"}>{props.text}</span>
        </div>
      </div>
    </div>
      </>
  );
}