import { useEffect } from "react";
import {
  getApithunk,
  deleteApithunk,
  getLowToHightThunk,
} from "../features/cashcounter/ThunkApi";
import { useSelector, useDispatch } from "react-redux";
import { callUsereffect } from "../features/cashcounter/CashCounterSlice";
export default function HistoryPage() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.cashCounter);
  const { lowtohigh, loadinglowtohigh } = useSelector(
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
  }, [CallEffect]);
  console.log(lowtohigh, "lowtohigh");
  // console.log(CallEffect, "CallEffect");
  // console.log(users, "users");

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete</button>
      {loading ? (
        <div>
          <h1 style={{ textAlign: "center" }}>...Loading</h1>
        </div>
      ) : (
        <div>
          {" "}
          {lowtohigh.map((elm) => {
            return <div key={elm.id}>{elm.date}</div>;
          })}
        </div>
      )}
    </div>
  );
}
