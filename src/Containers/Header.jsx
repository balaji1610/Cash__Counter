// import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
export default function Header() {
  return (
    <div>
      {" "}
      <Grid container spacing={3}>
        {/*Create items with different breakpoints */}
        {/*For example,This item will be 12 units wide on extra small screens */}
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          xs=12
        </Grid>
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        <Grid item xs={12} sm={6}>
          xs=12 sm=6
        </Grid>
        <Grid item xs={12} sm={6}>
          xs=12 sm=6
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
      </Grid>
    </div>
  );
}
