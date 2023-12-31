import { useState, useEffect } from "react";
import {
  getApithunk,
  deleteApithunk,
  getLowToHightThunk,
  getHighToLowThunk,
} from "../features/cashcounter/ThunkApi";
import { useSelector, useDispatch } from "react-redux";
import { callUsereffect } from "../features/cashcounter/CashCounterSlice";
import Sorting from "../Containers/Sorting";
import ListDesign from "../Containers/ListDesign";
import CircularProgress from "@mui/material/CircularProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import Mobile_ListDesign from "../Containers/Mobile_ListDesign";
export default function HistoryPage() {
  const mobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cashCounter);
  const { users, lowtohigh, hightolow } = useSelector(
    (state) => state.cashCounter
  );
  const CallEffect = useSelector((state) => state.cashCounter.value);

  const handleDeleteClick = async () => {
    const deleteItemsApi = await dispatch(deleteApithunk(51));
    dispatch(callUsereffect());
    console.log(deleteItemsApi, "deleteItemsApi");
  };
  useEffect(() => {
    dispatch(getApithunk());
    dispatch(getLowToHightThunk());
    dispatch(getHighToLowThunk());
  }, [CallEffect]);
  // console.log(lowtohigh, "lowtohigh");
  // console.log(CallEffect, "CallEffect");
  // console.log(hightolow, "hightolow");

  //Sorting
  const [showHistoryPage, setShowHistoryPage] = useState("default");
  const handleChange = (event) => {
    let selectedValue = {
      "High To Low": () => setShowHistoryPage("High To Low"),
      "Low To High": () => setShowHistoryPage("Low To High"),
      default: () => setShowHistoryPage("default"),
    };
    return selectedValue[event.target.value]();
  };

  const getitem =
    (showHistoryPage == "High To Low" && hightolow) ||
    (showHistoryPage == "Low To High" && lowtohigh) ||
    (showHistoryPage == "default" && users) ||
    users;

  return (
    <div>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}

      <div>
        <Sorting handleChange={handleChange} value={showHistoryPage} />
      </div>
      {loading ? (
        <div
          style={{
            height: "60vh",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            <CircularProgress />
          </h1>
          <h1 style={{ textAlign: "center" }}>
            Loading{" "}
            <span
              style={{
                color: "red",
              }}
            >
              . . .
            </span>
          </h1>
        </div>
      ) : (
        <div
          style={{
            height: "80vh",
            overflowY: "scroll",
            marginTop: "50px",
          }}
        >
          {" "}
          {getitem.map((elm) => {
            return mobile ? (
              <ListDesign item={elm} />
            ) : (
              <Mobile_ListDesign item={elm} />
            );
          })}
        </div>
      )}
    </div>
  );
}
{
  /* <ListDesign item={elm} /> */
}
