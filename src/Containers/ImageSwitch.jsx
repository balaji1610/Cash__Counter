import { Grid } from "@mui/material";
export default function ImageSwitch() {
  return (
    <div>
      <Grid container xs={12} direction="row" justifyContent="center">
        <Grid item>
          <div className="Parent__ImageSwitch__Layout ">
            {" "}
            <img
              src="https://img.icons8.com/fluency/48/rupee.png"
              width="120"
              height="120"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
