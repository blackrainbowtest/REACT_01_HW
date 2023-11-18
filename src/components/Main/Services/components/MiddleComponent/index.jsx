import CardComponent from "./CardComponent"
import person from "../../../../../person.png"
import cash from "../../../../../cash.png"
import car from "../../../../../car.png"

export default function MiddleComponent() {
  const cardData = [
    {
        id: 1,
        url: person,
        title: "Personal loan",
        text: "Personal loans provide borrowers with flexibility in how they use the funds.",
        button: "Apply now",
    }, 
    {
        id: 2,
        url: cash,
        title: "Business loan",
        text: "Business Loan Servoces provide financial assistance to bussinesses for various pirposes..",
        button: "Apply now",
    }, 
    {
        id: 3,
        url: car,
        title: "Auto loan",
        text: "Auto Loan Servoces provide financing options for individuals businesses to purchase a vehicle.",
        button: "Apply now",
    }];
  return (
    <>
      <div className="flex justify-center gap-4 p-8 bg-serviceBG">
        {cardData.map((data) => (
          <CardComponent key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
