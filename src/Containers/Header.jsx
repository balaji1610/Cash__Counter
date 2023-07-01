import { Grid } from "@mui/material";
import CurrentDate from "./CurrentDate";
export default function Header() {
  return (
    <div>
      <div className="Parent__Header__Layout">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          style={{ height: "15vh" }}
        >
          <Grid item xs={12} sm={3}></Grid>

          <Grid item xs={12} sm={4}>
            <div className="header_title_Layout">
              <div style={{ width: "90px", paddingTop: "20px" }}>
                <span>
                  {" "}
                  <img
                    width="76"
                    height="76"
                    src="https://img.icons8.com/color/96/rupee--v1.png"
                    alt="rupee--v1"
                  />
                </span>
              </div>

              <div className="title___style">
                <h1>Cash Counter</h1>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="dateTime__flex">
              {" "}
              <CurrentDate />
            </div>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}
