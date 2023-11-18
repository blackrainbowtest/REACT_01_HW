import ContentDescription from "./ContentDescription";
import ContentImage from "./ContentImage";

export default function BodyContent(props) {
  const data = props.data;
  return (
    <>
      <div className="flex justify-between items-center">
        {data.id % 2 === 0 ? (
          <>
            <ContentDescription data={data} />
            <ContentImage data={data} />
          </>
        ) : (
          <>
            <ContentImage data={data} />
            <ContentDescription data={data} />
          </>
        )}
      </div>
    </>
  );
}
