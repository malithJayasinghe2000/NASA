import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function FavoriteImages({ favorites, photos }) {
  return (
    <Container className="mt-3 d-flex flex-column align-items-center">
      <h1 style={{color:"white",fontFamily:"poppins"}}>Favorite Images</h1>
      <br />
      <Row xs={1} md={2} lg={3} className="g-4">
        {photos
          .filter(photo => favorites.includes(photo.id))
          .map((photo, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem',borderWidth:'3px',borderColor:'white' }}>
                <Card.Img variant="top" src={photo.img_src} />
                <Card.Body>
                  <Card.Title>{photo.camera.full_name}</Card.Title>
                  <Card.Text>
                    Earth Date: {photo.earth_date}
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
