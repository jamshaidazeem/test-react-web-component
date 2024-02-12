import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { ChecklistItemType } from "./types";

export default function ChecklistItem({
  item,
  onChange,
}: {
  item: ChecklistItemType;
  onChange: (item: ChecklistItemType) => void;
}): JSX.Element {
  return (
    <Box display="flex" gap="1rem">
      <FormControlLabel
        sx={{ "& .MuiFormControlLabel-label": { fontSize: "30px" } }}
        label={item.label}
        control={
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 50 } }}
            checked={item.isChecked}
            onChange={() => onChange({ ...item, isChecked: !item.isChecked })}
          />
        }
      />
    </Box>
  );
}
