import { Box, Button, TextField } from "@mui/material";
import { useState, FC } from "react";
import { ChecklistItemType } from "./types";
import ChecklistItem from "./ChecklistItem";

type Props = {
  items?: ChecklistItemType[];
};

function sortItems(a: ChecklistItemType, b: ChecklistItemType) {
  if (a.isChecked && !b.isChecked) {
    return 1;
  } else if (!a.isChecked && b.isChecked) {
    return -1;
  } else {
    return 0;
  }
}

const Checklist: FC<Props> = (props) => {
  const [newItem, setNewItem] = useState<string>("");
  const [items, _setItems] = useState<Array<ChecklistItemType>>(
    props.items || []
  );
  const setItems = (newItems: Array<ChecklistItemType>) => {
    _setItems(newItems.sort(sortItems));
  };

  return (
    <Box>
      <Box display="flex" gap="1rem">
        <TextField
          label="Add checklist item"
          value={newItem}
          onChange={(e) => setNewItem(e.currentTarget.value)}
          variant="outlined"
        />
        <Button
          onClick={() => {
            setItems([...items, { label: newItem, isChecked: false }]);
            setNewItem("");
          }}
        >
          Add
        </Button>
      </Box>
      {items.map((item, index) => (
        <ChecklistItem
          key={item.label}
          item={item}
          onChange={() => {
            const newItems = [...items];
            newItems[index] = { ...item, isChecked: !item.isChecked };
            setItems(newItems);
          }}
        />
      ))}
    </Box>
  );
};

export default Checklist;
