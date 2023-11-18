export default function CardComponent(props) {
  const data = props.data;
  return (
    <>
      <div className="w-full border-2 border-[#E6EAE9] rounded p-4 flex flex-col items-center justify-center leading-normal">
        <img
          src={data?.url ? data.url : ""}
          alt={data?.title}
          style={{ width: "150px" }}
        />
        <p className="font-normal text-4xl text-serviceTitle p-4">
          {data?.title}
        </p>
        <p className="font-normal text-2xl text-serviceText">{data?.text}</p>
        <button className="bg-transparent hover:bg-slate-400 text-xl py-2 px-6 rounded-full border-2 border-[#90B0B8] text-buttonDarkText">
          {data?.button}
        </button>
      </div>
    </>
  );
}
