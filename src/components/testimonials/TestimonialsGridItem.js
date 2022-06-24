import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaQuora,
  FaGithub,
} from "react-icons/fa";
import "./testimonialsGridItem.css";

export default function TestimonialsGridItem({ data }) {
  const {
    id,
    img,
    name,
    country,
    flag,
    socialType,
    socialLink,
    video,
    description,
  } = data;
  return (
    <Fragment>
      <Card
        className="h-100 testimonial-card"
        style={{
          border: "none",
          boxShadow: "0px 0px 5px 0px rgba(37, 117, 252, 0.2)",
        }}
      >
        <Card.Body>
          <div className="d-flex align-items-center">
            {/* reviewer image starts */}
            <Card.Img
              className="testimonial-img align-self-start overflow-hidden"
              src={img}
              alt={`img ${id}`}
            />
            {/* reviewer image ends */}
            {/* reviewer details starts */}
            <div className="testimonial-reviewer-details d-flex flex-column">
              <Card.Title className="testimonial-card-title">{name}</Card.Title>
              {/* country start */}
              <div className="d-flex align-items-center">
                <img
                  className="testimonial-flag-img"
                  src={flag}
                  alt={`${country} flag`}
                />
                <Card.Text className="testimonial-card-subtitle text-muted">
                  {country}
                </Card.Text>
              </div>
              {/* country end */}
            </div>
            {/* reviewer details ends */}
            {/* social icon starts */}
            <a href={socialLink} className="testimonial-social-icon">
              {socialType === "linkedin" ? (
                <FaLinkedinIn className="icon-linkedin" />
              ) : socialType === "facebook" ? (
                <FaFacebookF className="icon-facebook" />
              ) : socialType === "instagram" ? (
                <FaInstagram className="icon-instagram" />
              ) : socialType === "quora" ? (
                <FaQuora className="icon-quora" />
              ) : (
                <FaGithub className="icon-github" />
              )}
            </a>
            {/* social icon ends */}
          </div>
          <hr className="testimonial-hr-line" />
          {description ? (
            <Card.Text className="testimonial-card-text">
              {description}
            </Card.Text>
          ) : (
            <div className="w-100 d-flex">
              <video
                className="testimonial-video w-100"
                src={video}
                controls
              ></video>
            </div>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
}
