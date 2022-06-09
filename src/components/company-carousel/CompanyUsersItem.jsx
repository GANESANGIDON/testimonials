import React from "react";
import "./usersCarousel.css";

export default function CompanyUsersItem({ data }) {
  return (
    <>
      <img src={data.img} alt={`img ${data.id}`} className="company-img" />
    </>
  );
}
