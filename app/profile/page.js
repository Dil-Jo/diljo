import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
import CurrentSettingComponent from "./components/CurrentSettingComponent";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-1 bg-white md:col-span-9">
        <div className="m-6 h-screen">
          <div className="inline">
            <CurrentSettingComponent />
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-white md:col-span-3">
        <div className="m-6 flex flex-col">
          <ProfileComponent />
          <ButtonGroupComponent />
        </div>
      </div>
    </div>
  );
}
