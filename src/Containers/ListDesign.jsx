import { Grid } from "@mui/material";

export default function ListDesign({ item }) {
  const { id, date } = item;

  const dataTimeSplit = date.split("at");
  const Date = dataTimeSplit[0];
  const Time = dataTimeSplit[1];
  const { sumoftotal, coins, notes } = item.total;

  return (
    <div>
      <div key={id} className="spacing">
        <Grid container xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className="Parent_ListLayout_Design">
              <div className="Date_Time_layout">
                <div className="date_layout">
                  <div>
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/fluency/48/calendar.png"
                      alt="calendar"
                    />
                  </div>
                  <div>
                    <h2>{Date}</h2>
                  </div>
                </div>
                <div className="time_layout">
                  <div>
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/color/48/clock--v1.png"
                      alt="clock--v1"
                    />
                  </div>
                  <div>
                    <h2> {Time}</h2>
                  </div>
                </div>
              </div>
              <div className="Total_sum_layout">
                <div className="total_flex">
                  <div>
                    {" "}
                    <img
                      width="42"
                      height="42"
                      src="https://img.icons8.com/color/96/rupee--v1.png"
                      alt="rupee--v1"
                    />
                  </div>
                  <div
                    style={{
                      width: "120px",
                      padding: "30px",
                    }}
                  >
                    <h1>{sumoftotal.toLocaleString()}</h1>
                  </div>
                </div>
                <div className="Delete_flex">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/plasticine/100/filled-trash.png"
                    alt="filled-trash"
                  />
                </div>
              </div>
              <div className="Coins_Notes_layout">
                <div
                  className="notes_layout {
"
                >
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/money-bag-rupee.png"
                      alt="money-bag-rupee"
                    />
                  </div>
                  <div
                    style={{
                      width: "85px",
                    }}
                  >
                    <h2>{notes.toLocaleString()}</h2>
                  </div>
                </div>
                <div className="coins_layout">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/coins.png"
                      alt="coins"
                    />
                  </div>
                  <div
                    style={{
                      width: "85px",
                    }}
                  >
                    <h2>{coins.toLocaleString()}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}
