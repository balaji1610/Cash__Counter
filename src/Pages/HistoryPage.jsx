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
export default function HistoryPage() {
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
  const [showHistoryPage, setShowHistoryPage] = useState(users);
  const handleChange = (event) => {
    let selectedValue = {
      "High To Low": () => setShowHistoryPage(hightolow),
      "Low To High": () => setShowHistoryPage(lowtohigh),
      "default value": () => setShowHistoryPage(users),
    };

    return selectedValue[event.target.value]();
  };
  console.log(showHistoryPage, "HistoryPage");
  return (
    <div>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}

      <div>
        <Sorting handleChange={handleChange} />
      </div>
      {loading ? (
        <div>
          <h1 style={{ textAlign: "center" }}>...Loading</h1>
        </div>
      ) : (
        <div>
          {" "}
          {users.map((elm) => {
            return <div key={elm.id}>{elm.date}</div>;
          })}
        </div>
      )}
    </div>
  );
}
