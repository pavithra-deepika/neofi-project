import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useState } from "react";
import Trade from "./Trade";
import About from "./About";
import Earn from "./Earn";
import Support from "./Support";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function NavBar() {
  const [navBarData, setNavBarData] = useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ ml: 1, maxWidth: 1280, mt: 2, minHeight: 5, maxHeight: 70 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 12 }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:2400/1*Hdist_8Z9N3kJWCRXsQZrA.png"
              height={80}
              width={70}
            />
            <label>
              <bold>Neofi</bold>
            </label>
          </IconButton>
          <List sx={{ mt: 1, ml: 5 }}>
            <ListItem
              disablePadding
              sx={{ display: "black" }}
              onClick={() => setNavBarData("Trade")}
            >
              <ListItemText>Trade</ListItemText>
            </ListItem>
          </List>
          <List sx={{ mt: 1, ml: 8 }}>
            <ListItem
              disablePadding
              sx={{ display: "black" }}
              onClick={() => setNavBarData("Earn")}
            >
              <ListItemText>Earn</ListItemText>
            </ListItem>
          </List>
          <List sx={{ mt: 1, ml: 8 }}>
            <ListItem
              disablePadding
              sx={{ display: "black" }}
              onClick={() => setNavBarData("Support")}
            >
              <ListItemText>Support</ListItemText>
            </ListItem>
          </List>
          <List sx={{ mt: 1, ml: 8 }}>
            <ListItem
              disablePadding
              sx={{ display: "black" }}
              onClick={() => setNavBarData("About")}
            >
              <ListItemText>About</ListItemText>
            </ListItem>
          </List>

          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{
              backgroundColor: "none",
              maxHeight: 150,
              minWidth: 160,
              maxWidth: 200,
              color: "white",
              ml: 50,
              mr: 2,
            }}
          >
            Connect walet
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6, ml: -8 }}>
        {navBarData == "Trade" && <Trade />}
        {navBarData == "Earn" && <Earn />}
        {navBarData == "Support" && <Support />}
        {navBarData == "About" && <About />}
      </Box>
    </Box>
  );
}
