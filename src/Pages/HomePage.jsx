import { Routes, Route } from "react-router-dom";
import CashCounterPage from "./CashCounterPage";
import HistoryPage from "./HistoryPage";
import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CashCounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
