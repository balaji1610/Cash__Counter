import { useEffect } from "react";
import { getApithunk } from "../features/cashcounter/CashCounterSlice";
import { useSelector, useDispatch } from "react-redux";
export default function HistoryPage() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.cashCounter);

  useEffect(() => {
    dispatch(getApithunk());
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1 style={{ textAlign: "center" }}>...Loading</h1>
        </div>
      ) : (
        <div>
          {" "}
          {users.map((elm) => {
            return <div>{elm.id}</div>;
          })}
        </div>
      )}
    </div>
  );
}
