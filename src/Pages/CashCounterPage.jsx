import ImageSwitch from "../Containers/ImageSwitch";
import { Grid } from "@mui/material";
import Input__Card from "../Containers/Input__Card";
import InputField from "../Reusable_compoents/InputField";
export default function CashCounterPage() {
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
              <div style={{ border: "2px solid red", height: "100vh" }}>
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
