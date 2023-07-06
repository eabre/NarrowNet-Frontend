import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../Sidebar/Sidebar";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
function Navbar() {
  let userId = 5;
  return (
    <div>
      <AppBar
        sx={{
          background: "linear-gradient(45deg, orange 30%, aqua 90%)",
          opacity: "40%",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#435e93" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            <Link className="linkContainer" to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link
              className="linkContainer"
              to={{ pathname: "/users/" + userId }}
            >
              User
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
