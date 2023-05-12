import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../Style/Plan.css'

const Plan = () => {
  return (
    <section>
      <h1> Planos</h1>
  
      <Card sx={{ maxWidth: 345, height: '500px'}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '452px' }}>
          <Typography gutterBottom variant="h3" component="div">
            Plano Starter
          </Typography>
          <Typography variant="body2" color='black' sx={{ flex: '1 0 auto',  flexDirection:'column' }}>
            <h3 className='preto'>POR APENAS:</h3>
            <h1 className='preto'>99,00</h1>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button variant="contained" sx={{ width: "100%", backgroundColor: "#000000", "&:hover": { backgroundColor: "#000000" }  }}>Assinar</Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Plan;
