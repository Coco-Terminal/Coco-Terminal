import React from "react";
import "./css/page_body.css";
import Editingtwo from './table/NTF-Trendings'
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import Table1 from './table/Table'

const options = [
  "Create ",
  "Squash ",
  "Rebase ",
];
const options1 = [
  "Create ",
  "Squash ",
  "Rebase ",
];
export default function Page_body() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const anchorRef1 = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selectedIndex1, setSelectedIndex1] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };
  const handleClick1 = () => {
    console.info(`You clicked ${options1[selectedIndex1]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleMenuItemClick1 = (
    event1: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index1: number
  ) => {
    setSelectedIndex1(index1);
    setOpen1(false);
  };

  const handleToggle1 = () => {
    setOpen1((prevOpen) => !prevOpen);
  };

  const handleClose1 = (event1: Event) => {
    if (
      anchorRef1.current &&
      anchorRef1.current.contains(event1.target as HTMLElement)
    ) {
      return;
    }

    setOpen1(false);
  };
  

  return (
    <div className="page_body">
      <h2>Trending Collections</h2>
      <div className="page_button">
         <React.Fragment>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
          <span>Pwiod:　　</span><Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label=""
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>

        <React.Fragment>
          <ButtonGroup
            variant="contained"
            ref={anchorRef1}
            aria-label="split button"
            className="button2"
          >
          <span>Pwiod:　　</span><Button onClick={handleClick1}>{options[selectedIndex1]}</Button>
            <Button
              size="small"
              aria-controls={open1 ? "split-button-menu" : undefined}
              aria-expanded={open1 ? "true" : undefined}
              aria-label=""
              aria-haspopup="menu"
              onClick={handleToggle1}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open1}
            anchorEl={anchorRef1.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose1}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick1(event, index)}
                        >
                          {options1}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>
      </div>
        <Editingtwo/>
        {/* <Table1/> */}
    </div>
  );
}
