import GetStartedInfo from "./components/GetStartedInfo";
import GetStartedLogo from "./components/getStartedLogo";

export default function GetStarted() {
  return (
    <>
      <div className="flex justify-between p-8 container mx-auto">
        <GetStartedInfo />
        <GetStartedLogo />
      </div>
    </>
  );
}
