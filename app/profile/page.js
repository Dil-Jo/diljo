import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
export default function Page() {
  return (
    <>
      <div className="grid h-screen">
        <div className="flex flex-col">
          <ProfileComponent />
          <ButtonGroupComponent />
        </div>
      </div>
    </>
  );
}
