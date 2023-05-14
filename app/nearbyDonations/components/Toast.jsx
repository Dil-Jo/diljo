export default function (props) {
  let classes = ""
  if (props.color == null) classes = 'bg-two';
  else classes = `${props.color}`;
  return (
    <>
      <div className="toast">
        <div className={'rounded-3xl py-2 px-4'.concat(" ", classes)}>
          <div>
            <span className={"text-white"}>{props.text}</span>
          </div>
        </div>
      </div>
    </>
  );
}