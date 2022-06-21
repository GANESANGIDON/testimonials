import React, { Fragment } from "react";
import "./university-carousel.css";

export default function UniversityUsersItem({ data }) {
  return (
    <Fragment>
      <img
        src={data.img}
        alt={`img ${data.id}`}
        className="university-img mx-auto"
      />
    </Fragment>
  );
}
