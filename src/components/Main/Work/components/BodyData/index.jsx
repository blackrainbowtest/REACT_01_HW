import BodyContent from "./BodyContent";
import Application from "../../../../../static/images/Application.png";
import Documentation from "../../../../../static/images/Documentation.png";
import Credit from "../../../../../static/images/Credit.png";
import Loan from "../../../../../static/images/Loan.png";

export default function BodyData() {
  const contentData = [
    {
      id: 1,
      url: Application,
      number: "01",
      title: "Application",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      url: Documentation,
      number: "02",
      title: "Documentation and Verification",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      url: Credit,
      number: "03",
      title: "Credit Assessment",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 4,
      url: Loan,
      number: "04",
      title: "Loan Approval",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <div className="pt-16">
      {contentData.map((data) => (
        <BodyContent key={data.id} data={data} />
      ))}
    </div>
  );
}
