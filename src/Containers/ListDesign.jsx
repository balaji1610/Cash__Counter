import { Grid } from "@mui/material";

export default function ListDesign({ item }) {
  return (
    <div>
      <div>
        <Grid container xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className="Parent_ListLayout_Design">
              Parent_ListLayout_Design
            </div>
          </Grid>

          <Grid item xs={2}>
            4
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
