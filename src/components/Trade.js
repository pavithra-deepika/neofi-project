import React, { useEffect } from 'react'
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
import files from '../Json/file'



export default function Trade() {
  let value = 0
  const[product, setProduct] = useState( {
    productPrice: "",
    productId: "",
    productName:"",
    investAmount:0,
    estimateAmount:0
  })
 
  function getData(value) {
    let stock = files.filter((product) => value === product.productName);
    let data = {
      productPrice: stock[0].productPrice,
      productName: stock[0].productName,
      productId: stock[0]. productId,
      estimateAmount: stock[0].estimateAmount,
      investAmount: stock[0].investAmount
    };
    setProduct(data);
  }

  function handleInputChange(event) {
    getData(event.target.value);
    console.log(product);
  }
  function handleInvestChange(evt) {
    console.log("e", evt.target.value)
      if(evt.target.value > 0 ){
        const name = evt.target.id;
        const newValue = evt.target.value;
        value = product.productPrice * evt.target.value;
        console.log("2222", value)
        setProduct({ ...product, estimateAmount: value, [name]: newValue });
        console.log("5555",product);

      } 

    }
    useEffect(() => {
      
    }, [product])
    

  return (
    <div className='trade'>

    <Card className='card'  sx={{ minWidth: 275, maxWidth: 350, ml: 55, mb: 10 , height: 350, color: 'white'}}>     
      <CardContent sx={{ml: 3,}}>, 
        <Typography sx={{ fontSize: 14, justifyContent: 'space-between', ml: 10 }} color="text.secondary" gutterBottom  >
          <Icon>
          <CurrencyRupeeIcon />
          </Icon>
        </Typography>
        <Select
          sx={{  mr: 2, width: 250, height: 40, mb: 2 }}
          size="small"
          id="productName"
          label="ProductPrice"
          variant="outlined"
          // key="status"
          onChange={handleInputChange}  
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Product Name</em>
          </MenuItem>
          {files.map((product) => (
            <MenuItem key={product.productId} value={product.productName}>
               {product.productName}
            </MenuItem>
          ))}
        </Select>
        <Typography sx={{mb: 2}} >
          Amount you to want to invest
        </Typography>
        <input 
            id="invest-amount"
            type="number"
            name="investAmmount"
            onChange={handleInvestChange}
            value={setProduct.investAmount}/>

        <Typography sx={{ mb: 1.5 }} >
          Estimate Number of ETH you will get
        </Typography>
        <input id="estimate-amount"
            type="number"
            name="estimateAmount"
            value={setProduct.estimateAmount}/>
            
      </CardContent>
      <CardActions className='button' sx={{ml: 4 }}>
        <Button type="submit" size="small">Buy</Button>
      </CardActions>
    </Card>
            </div>
  );
}
  
