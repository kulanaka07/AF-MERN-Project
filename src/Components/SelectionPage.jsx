import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import PetsIcon from "@material-ui/icons/Pets";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SelectionPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleAnimalClick = () => {
    navigate("/allanimblogs");
  };

  const handleAgriClick = () => {
    navigate("/agriUser");
  };

  return (
    <div className={classes.root}>
      <Zoom in={true}>
        <Fab
          className={classes.fab}
          color="success"
          aria-label="Animal Services"
          title="Animal Services"
          onClick={handleAnimalClick}
        >
          <PetsIcon />
        </Fab>
      </Zoom>
      <Zoom in={true} style={{ transitionDelay: "200ms" }}>
        <Fab
          className={classes.fab}
          color="success"
          aria-label="Agriculture Services"
          title="Agriculture Services"
          onClick={handleAgriClick}
        >
          <EcoIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
