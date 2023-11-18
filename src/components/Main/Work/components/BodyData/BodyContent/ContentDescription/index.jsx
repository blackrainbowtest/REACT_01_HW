export default function ContentDescription(props) {
  const data = props.data;
  return (
    <>
      <div className="" style={{ width: "60%" }}>
        <div className="relative" style={{ height: "100px"}}>
          <p className="absolute pb-8 text-5xl font-bold z-10 text-serviceTitle left-[15px]">
            {data?.title}
          </p>
          <p className="absolute top-[-45px] left-[-65px] text-[#E8E8E8] font-bold text-8xl text-center z-0">
            {data?.number}
          </p>
        </div>
        <div>
            <p className="">{data?.text}</p>
        </div>
      </div>
    </>
  );
}
