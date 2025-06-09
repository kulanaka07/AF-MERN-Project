import  { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a8b1f', // Set your desired primary color here
    },
  },
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
    width: '50%',
  },
  button: {
    margin: theme.spacing(2),
    width: '50%',
  },

}));

export default function Animal() {
  const classes = useStyles();
  const [animal, setAnimal] = useState({
    name: '',
    species: '',
    age: '',
    habitat: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(animal); // replace with your API call or data handling logic
  };

  return (
    <ThemeProvider theme={theme}>
    <form className={classes.form} onSubmit={handleSubmit}>

      <h1>Meka wada yakoooooo</h1>
      <TextField
        className={classes.input}
        label="Name"
        variant="outlined"
        name="name"
        value={animal.name}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Species"
        variant="outlined"
        name="species"
        value={animal.species}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Age"
        variant="outlined"
        name="age"
        value={animal.age}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Habitat"
        variant="outlined"
        color='primary'
        name="habitat"
        value={animal.habitat}
        onChange={handleChange}
      />
   
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Animal
      </Button>
    </form>
    </ThemeProvider>
  );
}


