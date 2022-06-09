import React from "react";
import "../company-carousel/usersCarousel.css";
import { Card } from "react-bootstrap";

export default function UniversityUsersItem({data}) {
  return (
    <>
      <Card className="university-card text-center p-1 justify-content-between">
        <Card.Img
          src={data.img}
          alt={`img ${data.id}`}
          className="university-img mx-auto"
        />
        <Card.Text className="university-text mt-1">{data.name}</Card.Text>
      </Card>
    </>
  );
}
