import useMediaQuery from "@mui/material/useMediaQuery";
export default function Input__Card({ label, inputField, getvalue }) {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <div
      className={mobile ? "input_Layout__Flex" : "Mobile__input_Layout__Flex"}
    >
      <div>
        <h1>{label}</h1>
      </div>
      <div>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/color/48/delete-sign--v1.png"
          alt="delete-sign--v1"
        />
      </div>
      <div>{inputField}</div>
      <div>
        <h1>=</h1>
      </div>

      <div>
        {" "}
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/material-sharp/48/rupee.png"
          alt="rupee"
        />
      </div>

      <div>
        <h1 className="Currenty__multiply__value">{getvalue}</h1>
      </div>
    </div>
  );
} 
