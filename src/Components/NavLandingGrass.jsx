import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function NavLandingGrass() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#1a8b1f" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          NAVBAR - Grassroot
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

