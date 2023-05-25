import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../Style/Plan.css'

const Plan = () => {
  return (
    <section>
      <h1>Planos
      </h1>
      	<div class="tabela-preco">

		
<div class="card-preco">
  <h3 class="card-preco-header">Básico</h3>
  <div class="preco"><sup>R$</sup>15<span>/Mês</span></div>
  <ul>
    <li><strong>3</strong> Websites</li>
    <li><strong>20 GB</strong> SSD</li>
    <li><strong>1</strong> Dominio</li>
    <li><strong>5</strong> Email</li>
    <li><strong>1x</strong> CPU e Ram</li>
    <li><strong>X </strong> Sem suporte</li>

  </ul>
  <a href="#" class="btn">Quero este Plano</a>
  
</div>


<div class="card-preco">
  <h3 class="card-preco-header">Médio</h3>
  <div class="preco"><sup>R$</sup>25<span>/Mês</span></div>
  <ul>
    <li><strong>5</strong> Websites</li>
    <li><strong>30 GB</strong> SSD</li>
    <li><strong>2</strong> Dominio</li>
    <li><strong>7</strong> Email</li>
    <li><strong>2x</strong> CPU e Ram</li>
    <li><strong>1 ano</strong> Suporte Grátis</li>

  </ul>
  <a href="#" class="btn">Quero este Plano</a>
  
</div>


<div class="card-preco">
  <h3 class="card-preco-header">Master</h3>
  <div class="preco"><sup>R$</sup>50<span>/Mês</span></div>
  <ul>
    <li><strong>8</strong> Websites</li>
    <li><strong>50 GB</strong> SSD</li>
    <li><strong>10</strong> Dominio</li>
    <li><strong>59</strong> Email</li>
    <li><strong>5x</strong> CPU e Ram</li>
    <li><strong>Imimitado</strong> Suporte Imlimitado </li>

  </ul>
  <a href="#" class="btn">Quero este Plano</a>
  
</div>

</div>
    </section>
  );
};

export default Plan;
