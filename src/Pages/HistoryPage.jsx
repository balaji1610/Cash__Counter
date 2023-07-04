import axios from "axios";
import { useEffect } from "react";
export default function HistoryPage() {
  useEffect(() => {
    async function GetResult() {
      const result = await axios(
        "https://orange-salty-insect.glitch.me/cashcounter"
      );

      console.log(result.data);
    }

    GetResult();
  }, []);

  return <div>HistoryPage</div>;
}
