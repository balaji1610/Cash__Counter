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
                    <h1>{Date}</h1>
                  </div>
                </div>
                <div className="date_layout">
                  <div>
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/color/48/clock--v1.png"
                      alt="clock--v1"
                    />
                  </div>
                  <div>
                    <h1> {Time}</h1>
                  </div>
                </div>
              </div>
              <div className="Total_sum_layout">
                <div className="total_flex">
                  <div>image</div>
                  <div>{sumoftotal}</div>
                </div>
                <div className="Delete_flex">Delete</div>
              </div>
              <div className="Coins_Notes_layout">
                <div className="date_layout">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/money-bag-rupee.png"
                      alt="money-bag-rupee"
                    />
                  </div>
                  <div>
                    <h2>{notes}</h2>
                  </div>
                </div>
                <div className="date_layout">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/coins.png"
                      alt="coins"
                    />
                  </div>
                  <div>
                    <h2>{coins}</h2>
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
