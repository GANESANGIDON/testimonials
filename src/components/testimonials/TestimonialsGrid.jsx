import React from "react";
import { Row, Col } from "react-bootstrap";
import TestimonialsData from "./TestimonialsData.json";
import TestimonialsGridItem from "./TestimonialsGridItem";

export default function TestimonialsGrid() {
  return (
    <>
      <div className="w-100">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          {TestimonialsData.map((data) => {
            return (
              <Col sm={6} lg={4} key={data.id} className="my-3">
                <TestimonialsGridItem data={data} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
