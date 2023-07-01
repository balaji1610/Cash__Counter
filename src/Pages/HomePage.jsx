import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/cashcounter/CashCounterSlice";
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
    </div>
  );
}
