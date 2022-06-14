import React from "react";
import "./company-carousel.css";

export default function CompanyUsersItem({ data }) {
  return (
    <>
      <img src={data.img} alt={`img ${data.id}`} className="company-img" />
    </>
  );
}
