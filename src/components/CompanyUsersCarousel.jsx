import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/usersCarousel.css";
import CompanyUsersData from "../assets/json/companyUsersData.json";
import { Container, Row, Col } from "react-bootstrap";

export default function CompanyUsersCarousel() {
  const responsiveOptions = {
    0: {
      items: 3,
      margin: 20
    },
    481: {
      items: 4,
    },
    768: {
      items: 5,
    },
    992: {
      items: 6,
    },
    1400: {
      items: 6,
    },
  };

  const options = {
    autoplay: true,
    autoplaySpeed: 2200,
    autoplayTimeout: 1800,
    loop: true,
    dots: false,
    responsive: { ...responsiveOptions },
  };

  return (
    <>
      <Container className="my-4">
        <Row>
          <Col xl ={10} lg = {10} xxl = {12} className = "mx-auto">
            <OwlCarousel {...options}>
              {CompanyUsersData.map((data) => {
                return (
                  <img
                    key={data.id}
                    src={data.img}
                    alt={`img ${data.id}`}
                    className="company-img"
                  />
                );
              })}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
