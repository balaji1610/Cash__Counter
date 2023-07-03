import TextField from "@mui/material/TextField";
export default function InputField({ onChange, value }) {
  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        color="primary"
        type="number"
        style={{
          width: "120px",
        }}
        inputProps={{
          min: 1,
          max: 999,
          style: { fontSize: 20, color: "black" },
        }}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
