import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const plans = [

  {
    name: 'Plano Premium',
    price: '$9,99/mês',
    features: [
      'Música sem anúncios',
      'Reprodução offline',
      'Qualidade de som superior',
      'Acesso em todos os dispositivos',
      ],
      isRecommended: true,
      },
      
      {
      name: 'Plano Familiar',
      price: '$14,99/mês',
      features: [
      'Música sem anúncios',
      'Reprodução offline',
      'Qualidade de som superior',
      'Acesso em até 6 contas',
      ],
      isRecommended: false,
      },
      ];
      
      const PlanList = () => {
      return (
        
<Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Plano Starter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" sx={{ width: "100%" }}>Share</Button>
      </CardActions>
    </Card>
      );
      };
      
      export default PlanList;