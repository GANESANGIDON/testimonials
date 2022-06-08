import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import UniversityUsersData from "../assets/json/UniversityUsersData.json";
import { Container, Row, Col } from "react-bootstrap";
import { UniversityUsersItem } from "../components";

export default function UniversityUsersCarousel() {
  const responsiveOptions = {
    0: {
      items: 3,
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
      items: 7,
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
          <Col xl={10} lg={10} xxl={12} className="mx-auto">
            <OwlCarousel {...options}>
              {UniversityUsersData.map((data) => {
                return <UniversityUsersItem key={data.id} data={data} />;
              })}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
