import InfoContainer from "./components/InfoContainer";
import RequestContainer from "./components/RequestContainer";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-serviceBG to-white">
      <div className="flex justify-between container mx-auto py-16">
        <InfoContainer />
        <RequestContainer />
      </div>
    </div>
  );
}
