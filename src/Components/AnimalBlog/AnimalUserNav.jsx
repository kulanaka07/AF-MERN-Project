import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));
export default function AnimalUserNav() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: "#1a8b1f" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          LAAIF
        </Typography>
        <div className="ml-auto"></div>
      </Toolbar>
    </AppBar>
  );
}
