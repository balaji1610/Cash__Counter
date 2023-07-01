import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/cashcounter/CashCounterSlice";
import { Routes, Route } from "react-router-dom";
import CashCounterPage from "./CashCounterPage";
import HistoryPage from "./HistoryPage";
import Header from "../Containers/Header";
export default function HomePage() {
  const count = useSelector((state) => state.cashCounter.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      HomePage
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      <Header/>
      <Routes>
        <Route path="/" element={<CashCounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}
