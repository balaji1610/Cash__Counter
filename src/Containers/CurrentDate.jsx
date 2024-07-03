export default function CurrentDate() {
  const date = new Date();

  const options1 = {
    dateStyle: "full",
  };

  const datatime = new Intl.DateTimeFormat("en-GB", options1).format(date);

  const currentData = datatime.split(",");

  const currentday = currentData[0];
  const currentDatemonth = currentData[1]?.split(" ").join(",");

  return (
    <div style={{ color: "#212121" }}>
      <div className="Font__CurrentDat">
        {currentday} &nbsp;{currentDatemonth}
      </div>
    </div>
  );
}
