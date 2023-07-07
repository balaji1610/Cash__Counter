import { Grid } from "@mui/material";

export default function ListDesign({ item }) {
  return (
    <div>
      <div>
        <Grid container xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className="Parent_ListLayout_Design">
              <div className="Date_Time_layout">
                <div className="date_layout">
                  <div>image</div>
                  <div>Date</div>
                </div>
                <div className="date_layout">
                  <div>image</div>
                  <div>Time</div>
                </div>
              </div>
              <div className="Total_sum_layout">
                <div className="total_flex">
                  <div>image</div>
                  <div>Amount</div>
                </div>
                <div className="Delete_flex">Delete</div>
              </div>
              <div className="Coins_Notes_layout">
                <div className="date_layout">
                  <div>image</div>
                  <div>Date</div>
                </div>
                <div className="date_layout">
                  <div>image</div>
                  <div>Time</div>
                </div>
              </div>
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
