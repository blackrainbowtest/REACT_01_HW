export default function ContentImage(props) {
  const data = props.data;
  return (
    <div className="" style={{ width: "50%" }}>
      <div style={{width: "80%"}}>
        <img src={data.url} alt={data.title} />
      </div>
    </div>
  );
}
