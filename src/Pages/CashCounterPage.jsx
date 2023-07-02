import ImageSwitch from "../Containers/ImageSwitch";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function CashCounterPage() {
  return (
    <div>
      <ImageSwitch />

      <div>
        <div>
          <Grid container>
            <Grid item xs={12} sm={1}>
              01
            </Grid>{" "}
            {/* Notes */}
            <Grid item xs={12} sm={5}>
              <div style={{ border: "2px solid red", height: "100vh" }}>
                <div className="spacing"></div>
                <div className="input_Layout__Flex">
                  <div>
                    <h1>500</h1>
                  </div>
                  <div>
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/color/48/delete-sign--v1.png"
                      alt="delete-sign--v1"
                    />
                  </div>
                  <div>
                    {" "}
                    <TextField
                      variant="outlined"
                      size="small"
                      color="primary"
                      type="number"
                      style={{
                        width: "120px",
                      }}
                    />
                  </div>
                  <div>
                    <h1>=</h1>
                  </div>

                  <div>
                    {" "}
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/material-sharp/48/rupee.png"
                      alt="rupee"
                    />
                  </div>

                  <div>
                    <h1>1000000</h1>
                  </div>
                </div>
                <div className="spacing"></div>
                <div className="input_Layout__Flex">
                  <div>01</div>
                  <div>02</div>
                  <div>03</div>
                  <div>04</div>
                  <div>05</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div style={{ border: "2px solid red", height: "100vh" }}>03</div>
            </Grid>
            <Grid item xs={12} sm={1}>
              04
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
