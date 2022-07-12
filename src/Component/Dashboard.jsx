import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Dashboard() {
  return (
    <Container>
      <Button variant="contained" color="success">
        Success
      </Button>

      <Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row style={{ marginTop: 80, marginLeft: 150 }}>
        <Col xs={6} md={3}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdominicroye.github.io%2Fen%2F2018%2Fthe-pie-chart%2Ffeatured.png&f=1&nofb=1" alt="" height={130} width={280} />
        </Col>
        <Col xs={6} md={3}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdominicroye.github.io%2Fen%2F2018%2Fthe-pie-chart%2Ffeatured.png&f=1&nofb=1" alt="" height={130} width={280} />
        </Col>
        <Col xs={6} md={3}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdominicroye.github.io%2Fen%2F2018%2Fthe-pie-chart%2Ffeatured.png&f=1&nofb=1" alt="" height={130} width={280} />
        </Col>
        <Col xs={6} md={3}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdominicroye.github.io%2Fen%2F2018%2Fthe-pie-chart%2Ffeatured.png&f=1&nofb=1" alt="" height={130} width={280} />
        </Col>
      </Row>

      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row style={{ marginTop: 80, marginLeft: 20 }}>
        <Col xs={12} md={8}>
          <img src="https://datavizproject.com/wp-content/uploads/2015/10/Screen-Shot-2016-06-07-at-11.52.30.png" alt="" height={250} />
        </Col>
        <Col xs={6} md={4}>
          <Row>
            <Col xs={6} md={12}>
              <img src="https://datavizproject.com/wp-content/uploads/2015/10/Screen-Shot-2016-06-07-at-11.52.30.png" alt="" height={150} />
            </Col>
            <Row>
              <Col xs={6} md={6}>
                <img src="https://datavizproject.com/wp-content/uploads/2015/10/Screen-Shot-2016-06-07-at-11.52.30.png" alt="" height={150} />
              </Col>
              <Col xs={6} md={6}>
                <img src="https://datavizproject.com/wp-content/uploads/2015/10/Screen-Shot-2016-06-07-at-11.52.30.png" alt="" height={150} />
              </Col>
              </Row>

          </Row>
          
        </Col>
      </Row>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row style={{ marginTop: 80, marginLeft: 200 }}>
        <Col xs={6}>
          <img src="https://www.math-only-math.com/images/line-graph.png" alt="" height={250} />

        </Col>
        <Col xs={6}>
          <img src="https://community.jmp.com/t5/image/serverpage/image-id/10070iD09218B12C9FA039?v=v2" alt="" height={250} />

        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;