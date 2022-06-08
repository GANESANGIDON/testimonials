import React from "react";
import "../assets/css/usersCarousel.css";

export default function CompanyUsersItem({ data }) {
  return (
    <>
      <img src={data.img} alt={`img ${data.id}`} className="company-img" />
    </>
  );
}
