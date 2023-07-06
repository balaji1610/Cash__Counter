import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
export default function Dropdown({
  style,
  value,
  onChange,
  options,
  optionsStyle,
}) {
  return (
    <div>
      <Select style={style} value={value} onChange={onChange}>
        {options.map((elm) => {
          return (
            <MenuItem value={elm.value} style={optionsStyle}>
              {" "}
              {elm.label}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
