import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container,Row,Col } from 'react-bootstrap';


import Dashboard from './Component/Dashboard';
import Topbar from './Component/Topbar';
import Side from './Component/Side';

const Item = styled(Paper)({
 
});

function Contained() {
  return (
    <>
      
      <Row>
        <Col sm={2} lg={0} md={2}>
          <Side/>
        
        </Col>
        <Col sm={10} lg={12}md={10} >
          <Topbar/>
        
            <Dashboard />
        </Col>
      </Row>
      </>
  );
}
export  default Contained;
