import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";

export default function RightComponent() {
    return (
      <>
        <div className="text-[#fff] flex gap-16">
            <OurServices />
            <ContactUs />
        </div>
      </>
    );
}