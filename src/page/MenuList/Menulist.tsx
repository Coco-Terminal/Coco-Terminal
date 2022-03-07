import React from "react";
import "./css/menulist.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
export default function Menulist() {
  const text = "jonr";

  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <div className="MenuList">
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="" className="head_p" />
      </Stack>
      <p>{text}</p>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick} className="text">
          {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
          <ListItemText primary="　　NFT" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　Watchlist" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　Calendar" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　Trends" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick1} className="text">
          <ListItemText primary="　　Doshboord" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　My Wallet" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　Token" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick2} className="text">
          <ListItemText primary="　　Social" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="　　Forum" />
            </ListItemButton>
          </List>
          </Collapse>
      </List>
        <p className="herder_text"> 
        <span>Get</span>
        <span>Preminu</span>
        <span> Now</span>
        </p>

    </div>
  );
}
