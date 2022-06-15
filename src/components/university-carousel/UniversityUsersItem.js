import React from "react";
import "./university-carousel.css";

export default function UniversityUsersItem({ data }) {
  return (
    <>
      <img
        src={data.img}
        alt={`img ${data.id}`}
        className="university-img mx-auto"
      />
    </>
  );
}
