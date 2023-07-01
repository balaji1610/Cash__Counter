import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/cashcounter/CashCounterSlice";
import { Routes, Route } from "react-router-dom";
import CashCounterPage from "./CashCounterPage";
import HistoryPage from "./HistoryPage";
import Header from "../Containers/Header";
import Toast_Comp from "../Reusable_compoents/Toast_Comp";
import { useState } from "react";
export default function HomePage() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitbtn = () => {
    alert("Balaji");
  };
  const count = useSelector((state) => state.cashCounter.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      HomePage
      <div>
        {" "}
        <Toast_Comp
          open={open}
          handleClose={handleClose}
          title={"Add screen"}
          content={<div>content</div>}
          btnname={"send"}
          btnclick= {submitbtn}
        />
      </div>
      <div>
        {" "}
        <h1>{count}</h1>
      </div>
      <button onClick={handleClickOpen}>Toast</button>
      <button onClick={handleClick}>Click</button>
      <Header />
      <Routes>
        <Route path="/" element={<CashCounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}
