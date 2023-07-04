import { useEffect } from "react";
import Services from "../Services/ServicesAxios";
export default function HistoryPage() {
  useEffect(() => {
    async function GetResults() {
      const result = await Services.getApi();

      console.log(result, "result");
    }

    GetResults();
  }, []);

  return <div>HistoryPage</div>;
}
