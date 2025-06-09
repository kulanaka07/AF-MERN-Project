// import React from 'react';
import { Typography, Box, Grid, Paper, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../AnimalProduction/AnimalProduction.css";
import { useEffect } from 'react';
import { useState } from 'react';

const BackButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  // textAlign: 'center',
}));

const RootBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginLeft: theme.spacing(20),
  marginRight: theme.spacing(20),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.spacing(1),
}));




export default function SingleProductPage() {

  // const [ID , setID] = useState(null);
  const [District, setDistrict] = useState('');
  const [Division, setDivision] = useState('');
  const [VegiType, setVegiT] = useState('');
  const [Season, setSeason] = useState('');
  const [CLArea, setCLArea] = useState('');
  const [Harvest, setHarvest] = useState('');
  const [SurplusDeficit, setSurDef] = useState(''); 
  const [Year, setYear] = useState('');

  useEffect(()=>{
  // setID(localStorage.getItem('ID'));
  setDistrict(localStorage.getItem('District'));
  setDivision(localStorage.getItem('Division'));
  setVegiT(localStorage.getItem('VegiType'));
  setSeason(localStorage.getItem('Season'));
  setCLArea(localStorage.getItem('CLArea'));
  setHarvest(localStorage.getItem('Harvest'));
  setSurDef(localStorage.getItem('SurplusDeficit'));
  setYear(localStorage.getItem('Year'));

},[]); 
  return (
    <RootBox>
      <h1 className="h1" style={{ textAlign: 'center' }}>
        View {District}, {Division} Details
      </h1>
      <BackButtonContainer>
      <Link to="/clientvegi">
        <Button variant="contained" color="success">Back</Button>
      </Link>
      </BackButtonContainer>
    
      <StyledPaper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            District:
            </Typography>
            <Typography variant="body1">{District}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Division:
            </Typography>
            <Typography variant="body1">{Division}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Vegitable Type:
            </Typography>
            <Typography variant="body1">{VegiType}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Season:
            </Typography>
            <Typography variant="body1">{Season}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Cultivated Area:
            </Typography>
            <Typography variant="body1">{CLArea}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Harvest:
            </Typography>
            <Typography variant="body1">{Harvest}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Surplus/Deficit:
            </Typography>
            <Typography variant="body1">{SurplusDeficit}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Year:
            </Typography>
            <Typography variant="body1">{Year}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </RootBox>
  );
}

