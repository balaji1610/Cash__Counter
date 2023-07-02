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
        onChange={onChange}
        value={value}
      />
    </>
  );
}
