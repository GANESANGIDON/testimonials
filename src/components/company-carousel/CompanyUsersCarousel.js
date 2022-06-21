import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CompanyUsersData from "./CompanyUsersData.json";
import CompanyUsersItem from "./CompanyUsersItem";
import { Row } from "react-bootstrap";

export default function CompanyUsersCarousel() {
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
    <Fragment>
      <div className="w-100 my-5">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          <OwlCarousel {...options}>
            {CompanyUsersData.map((data) => {
              return <CompanyUsersItem key={data.id} data={data} />;
            })}
          </OwlCarousel>
        </Row>
      </div>
    </Fragment>
  );
}
