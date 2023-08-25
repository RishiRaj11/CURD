import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/">
      <AppBar style={{ background: "rgb(29,69,107)" }}>
        <Toolbar>
          <AcUnitIcon />
          <Typography variant="h6">CRUD</Typography>
        </Toolbar>
      </AppBar>
    </Link>
  );
};

export default Header;
