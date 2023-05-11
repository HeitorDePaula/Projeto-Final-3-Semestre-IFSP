import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Plan from '../Components/Plan';

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
        
      <Container>

      <Row className='titulo'>
      <Col>
      <h2>Escolha o seu plano</h2>
      </Col>
      </Row>
      
      <Container>
      <Row>
      {plans.map((plan, index) => (
        <Col key={index} sm="4">
      <Plan {...plan} />
      </Col>
      ))}
      </Row>
      </Container>
      </Container>  
      );
      };
      
      export default PlanList;