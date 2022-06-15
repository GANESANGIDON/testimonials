import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import UniversityUsersData from "./UniversityUsersData.json";
import UniversityUsersItem from "./UniversityUsersItem";
import { Row } from "react-bootstrap";

export default function UniversityUsersCarousel() {
  const responsiveOptions = {
    0: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 5,
    },
    1200: {
      items: 6,
    },
    1400: {
      items: 7,
    },
  };

  const options = {
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 1800,
    loop: true,
    dots: false,
    responsive: { ...responsiveOptions },
  };

  return (
    <>
      <div className="w-100">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          <OwlCarousel {...options}>
            {UniversityUsersData.map((data) => {
              return <UniversityUsersItem key={data.id} data={data} />;
            })}
          </OwlCarousel>
        </Row>
      </div>
    </>
  );
}
