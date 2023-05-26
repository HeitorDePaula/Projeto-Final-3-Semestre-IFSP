import * as React from 'react';
import Grid from '@mui/material/Grid';
import './review.css';

export default function Review() {
  return (
    <div>
        <Grid item xs={12} md={6}>
        <label for="cor_primaria">Cor Primária:</label>
        <input type="color" id="cor_primaria" name="cor_primaria" required/>
        <label for="cor_fundo">Cor de Fundo:</label>
        <input type="color" id="cor_fundo" name="cor_fundo" required/>
        </Grid>
      
        <label for="cor_secundaria">Cor Secundária:</label>
        <input type="color" id="cor_secundaria" name="cor_secundaria" required/>
      
        <label for="cor_texto">Cor do Texto:</label>
        <input type="color" id="cor_texto" name="cor_texto" required/>
      
        <h2>Carrossel de Imagens</h2>
        <input type="file" id="carrossel_imagens" name="carrossel_imagens[]" accept="image/*" multiple required/>
  
    
    </div>
  );
}