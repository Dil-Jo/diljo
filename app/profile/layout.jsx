import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";

export default function Page({ children }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12">
      <div className="col-span-1 bg-white xl:col-span-3">
        <div className="m-6 flex flex-col">
          <ProfileComponent />
          <ButtonGroupComponent />
        </div>
      </div>
      <div className="col-span-1 bg-white xl:col-span-9">
        <div className="m-6">
          <div className="inline">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
