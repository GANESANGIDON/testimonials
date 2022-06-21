import React, { Fragment } from "react";
import "./company-carousel.css";

export default function CompanyUsersItem({ data }) {
  return (
    <Fragment>
      <img src={data.img} alt={`img ${data.id}`} className="company-img" />
    </Fragment>
  );
}
