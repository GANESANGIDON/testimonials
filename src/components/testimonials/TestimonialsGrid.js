import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import TestimonialsData from "./TestimonialsData.json";
import TestimonialsGridItem from "./TestimonialsGridItem";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function TestimonialsGrid() {
  const [cardLimit, setCardLimit] = useState(6);
  const slice = TestimonialsData.slice(0, cardLimit);
  const showMore = () => {
    setCardLimit(cardLimit + 6);
  };
  const showLess = () => {
    setCardLimit(6);
  };
  return (
    <>
      <div className="w-100 my-2">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          {slice.map((data) => {
            return (
              <Col md={6} lg={4} key={data.id} className="my-3">
                <TestimonialsGridItem data={data} />
              </Col>
            );
          })}
        </Row>
        {/* load more button starts */}
        <span
          className="text-primary d-block text-center mx-auto"
          role="button"
          onClick={
            !(slice.length === TestimonialsData.length)
              ? () => showMore()
              : () => showLess()
          }
        >
          <b>
            See{" "}
            {!(slice.length === TestimonialsData.length) ? (
              <>
                More <FaAngleDown />
              </>
            ) : (
              <>
                Less <FaAngleUp />
              </>
            )}
          </b>
        </span>
        {/* load more button ends */}
      </div>
    </>
  );
}
