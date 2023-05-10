import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Icon, MenuItem } from '@mui/material';
import { useState } from 'react';
import Select from '@mui/material/Select';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Trade() {
  const[ade, setAge] = useState('')
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='trade'>

    <Card sx={{ minWidth: 275, maxWidth: 300, ml: 10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, justifyContent: 'space-between' }} color="text.secondary" gutterBottom  >
          <h3>Current value</h3>
          <Icon>
          <CurrencyRupeeIcon />
          </Icon>
        </Typography>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
        <Typography sx={{ mb: 1.5 }} >
          Amount you to want to invest
        </Typography>
        <input id="invest-amount"
            type="number"
            name="ammount"/>
        <Typography sx={{ mb: 1.5 }} >
          Estimate Number of ETH you will get
        </Typography>
        <input id="estimate-amount"
            type="number"
            name="estimate-amount"/>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
            </div>
  );
}
  
