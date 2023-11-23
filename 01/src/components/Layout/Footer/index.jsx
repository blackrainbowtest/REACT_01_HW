import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";

export default function Footer() {
  return (
    <>
      <div className="px-16 py-16 bg-footer-image">
        <div className="container mx-auto flex justify-between">
          <LeftComponent />
          <RightComponent />
        </div>
      </div>
    </>
  );
}
