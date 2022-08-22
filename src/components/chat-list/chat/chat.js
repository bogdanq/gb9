import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { memo } from "react";

export const Chat = memo(({ title, selected, handleListItemClick }) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={() => handleListItemClick(title)}
    >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>
  );
});
