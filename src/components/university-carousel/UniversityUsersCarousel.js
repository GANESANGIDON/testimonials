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
    481: {
      items: 4,
    },
    768: {
      items: 5,
    },
    992: {
      items: 7,
    },
    1400: {
      items: 8,
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
      <div className="w-100 my-2">
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