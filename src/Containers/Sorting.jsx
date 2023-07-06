import Dropdown from "../Reusable_compoents/Dropdown";
import { useState } from "react";
export default function Sorting() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = [
    {
      value: "High To Low",
      label: "High To Low",
    },
    {
      value: "Low To High",
      label: "Low To High",
    },
    {
      value: "Default",
      label: "Default",
    },
  ];

  return (
    <div>
      <p>DROPDOWN</p>

      <div>
        <Dropdown
          style={{
            width: "250px",
            height: "35px",
            fontSize: "20px",
            color: "#FF5252",
          }}
          value={age}
          onChange={handleChange}
          options={options}
          optionsStyle={{
            fontSize: "20px",
            color: "#212121",
          }}
        />

        {age}
      </div>
    </div>
  );
}
