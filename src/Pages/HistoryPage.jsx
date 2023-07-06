import { useEffect } from "react";
import { getApithunk } from "../features/cashcounter/ThunkApi";
import { useSelector, useDispatch } from "react-redux";
export default function HistoryPage() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.cashCounter);

  const CallEffect = useSelector((state) => state.cashCounter.value);

  useEffect(() => {
    dispatch(getApithunk());
  }, [CallEffect]);

  console.log(users, "users");

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
            return <div key={elm.id}>{elm.date}</div>;
          })}
        </div>
      )}
    </div>
  );
}
