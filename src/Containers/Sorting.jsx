import Dropdown from "../Reusable_compoents/Dropdown";
import { Grid } from "@mui/material";

export default function Sorting({handleChange}) {


  const options = [
    {
      value: "High To Low",
      label: "High To Low",
    },
    {
      value: "Low To High",
      label: "Low To High",
    },
    {
      value: "default value",
      label: "Default",
    },
  ];

  return (
    <div>
      <Grid container xs={12} direction="row" justifyContent="center">
        <Grid item>
          <div>
            <h3>Total Amount</h3>
            <Dropdown
              style={{
                width: "250px",
                height: "35px",
                fontSize: "20px",
                color: "#757575",
              }}
              onChange={handleChange}
              options={options}
              optionsStyle={{
                fontSize: "20px",
                color: "#212121",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
