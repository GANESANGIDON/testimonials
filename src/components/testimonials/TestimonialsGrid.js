import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TestimonialsData from "./TestimonialsData.json";
import TestimonialsGridItem from "./TestimonialsGridItem";

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
      <div className="w-100 pt-5 pb-3" id="testimonialsContainer">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          {slice.map((data) => {
            return (
              <Col md={6} lg={4} key={data.id} className="my-3">
                <TestimonialsGridItem data={data} />
              </Col>
            );
          })}
        </Row>
        {/* see more button starts */}
        <div className="text-center">
          {!(slice.length === TestimonialsData.length) ? (
            <span
              className="text-primary p-2"
              role="button"
              onClick={() => showMore()}
            >
              <b>
                Show More <FaAngleDown />
              </b>
            </span>
          ) : (
            <Link
              className="text-primary p-2 text-decoration-none"
              to="testimonialsContainer"
              smooth={true}
              duration={300}
              offset={-10}
              role="button"
              onClick={() => showLess()}
            >
              <b>
                Show Less <FaAngleUp />
              </b>
            </Link>
          )}
        </div>
        {/* see more button ends */}
      </div>
    </>
  );
}
