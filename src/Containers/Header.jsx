import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>

      <Link to="/">
        <button>Discount</button>
      </Link>
      <Link to="/history">
        <button>History</button>
      </Link>
    </div>
  );
}
