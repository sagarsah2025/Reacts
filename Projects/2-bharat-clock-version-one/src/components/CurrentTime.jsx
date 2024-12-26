let CurrentTime = () => {
  let time = new Date();
  return (
    <p classNameNameName="Lead">
      This is the current times: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
