import React from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import ReviewData from "../assets/json/ReviewData.json";
import { TestimonialsGridItem } from "../components";

export default function TestimonialsGrid() {
  return (
    <>
      <Container>
        <Row>
          {ReviewData.map((data) => {
            return (
              <Col
                sm={6}
                lg={4}
                key={data.id}
                className="my-3"
              >
                <TestimonialsGridItem data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
