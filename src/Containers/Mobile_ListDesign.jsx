import { Grid } from "@mui/material";
import Model_Comp from "../Reusable_compoents/Model_Comp";
import { useState } from "react";
import { deleteApithunk } from "../features/cashcounter/ThunkApi";
import { callUsereffect } from "../features/cashcounter/CashCounterSlice";
import { useDispatch } from "react-redux";

import Toast_comp from "../Reusable_compoents/Toast_comp";

export default function Mobile_ListDesign({ item }) {
  const dispatch = useDispatch();
  const { id, date } = item;

  const dataTimeSplit = date.split("at");
  const Date = dataTimeSplit[0];
  const Time = dataTimeSplit[1];
  const { sumoftotal, coins, notes } = item.total;

  const [open, setOpen] = useState(false);

  const handleModelOpen = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  //Toast
  const [deleteToast, setDeleteToast] = useState(false);

  const handleDeleteToast = () => {
    setDeleteToast(false);
  };

  const handleDeleteClick = async (deleteid, e) => {
    e.preventDefault();
    setDeleteToast(true);
    const deleteItemsApi = await dispatch(deleteApithunk(deleteid));

    dispatch(callUsereffect());

    console.log(deleteItemsApi, "deleteItemsApi");
  };
  return (
    <div>
      <div key={id} className="spacing">
        <Grid container xs={12}>
          <Grid item>
            <div className="mobile_Parent_ListLayout_Design">
              <div className="mobile_Date_Time_layout">
                <div className="mobile_date_layout">
                  <div>
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/fluency/48/calendar.png"
                      alt="calendar"
                    />
                  </div>
                  <div>{Date}</div>
                </div>
                <div className="mobile_time_layout">
                  <div>
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/color/48/clock--v1.png"
                      alt="clock--v1"
                    />
                  </div>
                  <div>{Time}</div>
                </div>
              </div>
              <div className="mobile_Total_sum_layout">
                <div className="mobile_total_flex">
                  <div>
                    {" "}
                    <img
                      width="18"
                      height="18"
                      src="https://img.icons8.com/color/96/rupee--v1.png"
                      alt="rupee--v1"
                    />
              
                  </div>
                  <div>
                    <h3>{sumoftotal.toLocaleString()}</h3>
                  </div>
                </div>
                <div
                  onClick={handleModelOpen}
                  className="Delete_flex"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/plasticine/100/filled-trash.png"
                    alt="filled-trash"
                  />
                </div>
                <Model_Comp
                  open={open}
                  handleClose={handleCloseClick}
                  content="Are You To Want Delete This Item ?"
                  btnclick={(e) => handleDeleteClick(id, e)}
                  btnname="Delete"
                />
              </div>
              <div className="mobile_Coins_Notes_layout">
                <div
                  className="mobile_notes_layout {
"
                >
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/money-bag-rupee.png"
                      alt="money-bag-rupee"
                    />
                  </div>
                  <div>{notes.toLocaleString()}</div>
                </div>
                <div className="mobile_coins_layout">
                  <div>
                    {" "}
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/coins.png"
                      alt="coins"
                    />
                  </div>
                  <div>{coins.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Toast_comp
        open={deleteToast}
        onClose={handleDeleteToast}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        style={{
          background:
            "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)",
          color: "#ffffff",
          fontSize: "17px",
        }}
        content="Deleted successfully"
      />
    </div>
  );
}
