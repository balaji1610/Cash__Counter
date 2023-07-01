import { Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
export default function DividerButton() {
  const [cashBtn, setCashBtn] = useState(true);

  const [historyBtn, setHistoryBtn] = useState(false);
  const Nav = useNavigate();
  const handleshowHistoryClick = () => {
    setCashBtn(false);
    setHistoryBtn(true);
    Nav("/history");
  };
  const handlecashCounterClick = () => {
    setCashBtn(true);
    setHistoryBtn(false);
    Nav("/");
  };
  return (
    <div className="Parent__Divider_layout">
      <Divider variant="middle">
        <Chip
          label="Cash Counter"
          color={cashBtn ? "success" : "default"}
          onClick={handlecashCounterClick}
        />
        <Chip
          label="Show History"
          color={historyBtn ? "success" : "default"}
          onClick={handleshowHistoryClick}
        />
      </Divider>
    </div>
  );
}
