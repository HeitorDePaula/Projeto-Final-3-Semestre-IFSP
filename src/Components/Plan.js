import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../Style/Plan.css';

const Plan = ({ name, price, features, isRecommended }) => {
  return (
    <Container className="plan-container">
      <Row>
        <Col>
          <h3 className="plan-name">{name}</h3>
        </Col><br/>
        {isRecommended && (
          <Col>
            <div className="recommended">Recomendado</div>
          </Col>
        )}
      </Row>
      <Row>
        <Col className="price">{price}</Col>
      </Row>
      {features.map((feature, index) => (
        <Row key={index} className="feature">
          <Col>{feature}</Col>
        </Row>
      ))}
      <Row>
        <Col>
          <Button className="btn-block" color="success">
            Selecionar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Plan;
