import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Certificates from "../pages/Certificates";

export default function CertificatesCarousel() {
  const responsivness = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [...responsivness],
  };

  return (
    <>
      <Container>
      <Slider {...settings}>
        {/* {CompanyUsersData.map((data) => {
          return (
            <Certificates />
          );
        })} */}
      </Slider>
      </Container>
    </>
  );
}
