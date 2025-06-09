// import React from 'react';
import { Typography, Box, Grid, Paper, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./AnimalProduction.css";
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
  const [Region, setRegi] = useState('');
  const [Division, setDivi] = useState('');
  const [CPopulation, setCPopu] = useState('');
  const [NeedPP, setNeedPP] = useState('');
  const [ConsuptionPY, setConsupPY] = useState('');
  const [SurplusDeficit, setSurDefi] = useState('');
  const [AvgCWeight, setAvgCWeight] = useState(''); 
  const [productionValue, setProValue] = useState('');

  useEffect(()=>{
  // setID(localStorage.getItem('ID'));
  setRegi(localStorage.getItem('Region'));
  setDivi(localStorage.getItem('Division'));
  setCPopu(localStorage.getItem('CPopulation'));
  setNeedPP(localStorage.getItem('NeedPP'));
  setConsupPY(localStorage.getItem('ConsuptionPY'));
  setSurDefi(localStorage.getItem('SurplusDeficit'));
  setAvgCWeight(localStorage.getItem('AvgCWeight'));
  setProValue(localStorage.getItem('productionValue'));

},[]); 
  return (
    <RootBox>
      <h1 className="h1" style={{ textAlign: 'center' }}>
        View {Region}, {Division} Details
      </h1>
      <BackButtonContainer>
      <Link to="/vbeef">
        <Button variant="contained" color="success">Back</Button>
      </Link>
      </BackButtonContainer>
    
      <StyledPaper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Region:
            </Typography>
            <Typography variant="body1">{Region}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Division:
            </Typography>
            <Typography variant="body1">{Division}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Cattle Population:
            </Typography>
            <Typography variant="body1">{CPopulation}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Need Per Person:
            </Typography>
            <Typography variant="body1">{NeedPP}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Consumption Per Year:
            </Typography>
            <Typography variant="body1">{ConsuptionPY}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Surplus / Deficit:
            </Typography>
            <Typography variant="body1">{SurplusDeficit}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Average Cattle Weight:
            </Typography>
            <Typography variant="body1">{AvgCWeight}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Amount needed to increase production:
            </Typography>
            <Typography variant="body1">{productionValue}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </RootBox>
  );
}

