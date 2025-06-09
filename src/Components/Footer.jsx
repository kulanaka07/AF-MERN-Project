import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{ marginTop: "70px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        LAAIF
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Managment System of Ministry of Land Agriculture Animal production and
        health Irrigations and Fisheries of Sabaragamuwa
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        <Link color="inherit" href="/">
          LAAIF
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}
