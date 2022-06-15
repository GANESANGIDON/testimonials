import React from "react";
import { Card } from "react-bootstrap";
import "./testimonialsGridItem.css";

export default function TestimonialsGridItem({ data }) {
  return (
    <>
      <Card className="h-100 testimonial-card">
        <Card.Body>
          <div className="d-flex align-items-center">
            {/* reviewer image starts */}
            <Card.Img
              className="testimonial-img align-self-start"
              src={data.img}
              alt={`img ${data.id}`}
            />
            {/* reviewer image ends */}
            {/* reviewer details starts */}
            <div className="d-flex flex-column ms-3">
              <Card.Title className="testimonial-card-title">
                {data.name}
              </Card.Title>
              {/* country start */}
              <div className="d-flex align-items-center">
                <img
                  className="testimonial-flag-img"
                  src={data.flag}
                  alt={`${data.country} flag`}
                />
                <Card.Text className="testimonial-card-subtitle text-muted ms-2">
                  {data.country}
                </Card.Text>
              </div>
              {/* country end */}
            </div>
            {/* reviewer details ends */}
            <Card.Img
              src={data.socialIcon}
              className="testimonial-social-icon ms-auto align-self-start"
            />
          </div>
          <hr />
          <Card.Text className="testimonial-card-text">
            {data.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
