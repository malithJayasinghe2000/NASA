import React, { useState, useEffect } from "react";
import { Card, Dropdown, Row, Col, Container } from "react-bootstrap";
import FavoriteImages from "./FavoriteImages";

export default function MarsRover(props) {
  const { data } = props;
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    if (data && data.photos) {
      const uniqueCameras = [...new Set(data.photos.map(photo => photo.camera.full_name))];
      setFilterOptions(uniqueCameras);
      setPhotos(data.photos.slice(0, 20));
    }
  }, [data]);

  useEffect(() => {
    // Save favorites to local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setPhotos(data.photos.slice(0, 20));
    } else {
      const filteredPhotos = data.photos.filter(photo => photo.camera.full_name === filter);
      setPhotos(filteredPhotos.slice(0, 20));
    }
  };

  const toggleFavorite = (photoId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const isFavorite = (photoId) => {
    return favorites.includes(photoId);
  };

  return (
    
    <Container className="d-flex flex-column align-items-center">
        {favorites.length > 0 && <FavoriteImages favorites={favorites} photos={photos} />}
        <br /><br />
        <h1 style={{color:"white",fontFamily:"poppins"}}>Mars Rover Photos</h1>
        <p style={{color:"white",fontFamily:"poppins"}}>Like your favourite photo</p>
        <br />
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="success">
          {selectedFilter ? selectedFilter : "Select Filter"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange("All")}>All</Dropdown.Item>
          {filterOptions.map((filter, index) => (
            <Dropdown.Item key={index} onClick={() => handleFilterChange(filter)}>{filter}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br /><br />
      <Row xs={1} md={2} lg={3} className="g-4">
        {photos.map((photo, index) => (
          <Col key={index}>
            <Card  style={{ width: '18rem',borderWidth:'3px',borderColor:'white' }} data-testid="mars-card">
              <Card.Img variant="top" src={photo.img_src} data-testid="mars" />
              <Card.Body>
                <Card.Title>{photo.camera.full_name}</Card.Title>
                <Card.Text>
                  Earth Date: {photo.earth_date}
                </Card.Text>
                <button role="button" onClick={() => toggleFavorite(photo.id)} className="btn">
                  <i className={`fa${isFavorite(photo.id) ? 's' : 'r'} fa-heart`} style={{ color: isFavorite(photo.id) ? 'red' : 'black' }}></i>
                </button>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
      
    </Container>
    

  );
}
