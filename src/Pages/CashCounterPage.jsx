import ImageSwitch from "../Containers/ImageSwitch";
import { Grid } from "@mui/material";
import Input__Card from "../Containers/Input__Card";
import InputField from "../Reusable_compoents/InputField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
export default function CashCounterPage() {
  const mobile = useMediaQuery("(min-width:600px)");
  const handleNumberChange = (e, arug) => {
    console.log(e.target.value, arug);
  };
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
              <div
                className={
                  mobile
                    ? "Notes__Module__layout"
                    : "Mobile__Notes__Module__layout"
                }
              >
                <div className="spacing"></div>
                <Input__Card
                  label="500"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 500)} />
                  }
                  getvalue="500"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="200"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 200)} />
                  }
                  getvalue="200"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="100"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 100)} />
                  }
                  getvalue="100"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="50"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 50)} />
                  }
                  getvalue="50"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="20"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 20)} />
                  }
                  getvalue="20"
                />
              </div>
            </Grid>
            {/* Coins */}
            <Grid item xs={12} sm={5}>
              <div
                className={
                  mobile
                    ? "Coins__Module__layout"
                    : "Mobile__Coins__Module__layout"
                }
              >
                <div className="spacing"></div>
                <Input__Card
                  label="10"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 10)} />
                  }
                  getvalue="10"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="5"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 5)} />
                  }
                  getvalue="5"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="2"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 2)} />
                  }
                  getvalue="2"
                />
                <div className="spacing"></div>
                <Input__Card
                  label="1"
                  inputField={
                    <InputField onChange={(e) => handleNumberChange(e, 1)} />
                  }
                  getvalue="1"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={1}>
              04
            </Grid>
            <Grid item xs={12}>
              <div className="Submit__clear__btn_layout">
                <div>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
                <div>
                  {" "}
                  <Button variant="contained" color="primary">
                    Clear
                  </Button>
                </div>
              </div>
            </Grid>{" "}
          </Grid>

          {/* Total Sum */}
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={2}>
              1
            </Grid>

            <Grid item xs={12} sm={3}>
              <div className="Total__Notes">
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Notes
                  </h2>
                </div>
                <div className="total_notes_flex">
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
                    <h1>100</h1>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="Total__sum__Card">
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Amount
                  </h1>
                </div>
                <div className="total_sum_flex">
                  <div>
                    {" "}
                    <img
                      width="45"
                      height="45"
                      src="https://img.icons8.com/material-sharp/48/rupee.png"
                      alt="rupee"
                    />
                  </div>
                  <div>
                    <h1>100000000</h1>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="Total__Coins">
                <div>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Total Coins
                  </h2>
                </div>
                <div className="total_coins_flex">
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
                    <h1>100</h1>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container xs={12} direction="row" justifyContent="center">
            <Grid item>
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                Eleven Lakh Seventy Two Thousand Eight Hundred And Twenty Eight
                Ruppess Only <span style={{ color: "red" }}>! ! !</span>
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
