import aboutImage from "../../../../../static/images/About.png"

export default function InfoContainer() {
    return (
      <div className="w-1/2">
        <div className="text-buttonDarkText font-bold text-5xl pb-8">
          About us
        </div>
        <div className="" style={{width: "80%"}}>
          <img src={aboutImage} alt="about" />
        </div>
        <div className="text-xl">
          QuickFunds - Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!
        </div>
      </div>
    );
  }
  