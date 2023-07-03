import { Grid } from "@mui/material";
export default function ImageSwitch({ OnchangeImage }) {
  const { ImageURL, alt, ClassName } = OnchangeImage;
  return (
    <div>
      <Grid container xs={12} direction="row" justifyContent="center">
        <Grid item>
          <div className="Parent__ImageSwitch__Layout ">
            {" "}
            <img src={ImageURL} alt={alt} className={ClassName} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
