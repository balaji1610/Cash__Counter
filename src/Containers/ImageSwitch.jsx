import { Grid } from "@mui/material";
export default function ImageSwitch({ image }) {
  return (
    <div>
      <Grid container xs={12} direction="row" justifyContent="center">
        <Grid item>
          <div className="Parent__ImageSwitch__Layout ">
            {" "}
            <img src={image} className="ImageList__style" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
