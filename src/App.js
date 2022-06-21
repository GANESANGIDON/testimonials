import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyUsers from "./components/company-carousel";
import UniversityUsers from "./components/university-carousel";
import Testimonials from "./components/testimonials";
import { Button, Navbar } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";

export default function App() {
  return (
    <Fragment>
      {/* navbar starts */}
      <Navbar
        className="navbar fixed-top border border-bottom w-100"
        bg="light"
      >
        <div className="col-11 col-xl-10 px-xl-3 mx-auto d-flex justify-content-between">
          <a
            className="h2 text-primary text-decoration-none"
            role="button"
            href="/"
          >
            @ Log2Base2
          </a>
          <Button className=" btn-sm px-3">Try for FREE</Button>
        </div>
      </Navbar>
      {/* navbar ends */}
      <CompanyUsers />
      <UniversityUsers />
      <Testimonials />
      {/* footer starts */}
      <footer className="bg-primary bg-gradient text-center text-light mt-3 py-3">
        <a
          className="footer-icons text-primary text-decoration-none bg-light mx-2"
          role="button"
          href="https://log2base2.com/"
          target="_blank"
          rel="noreferrer"
        >
          &#8736;
        </a>
        <a
          className="footer-icons text-primary text-decoration-none bg-light mx-2"
          role="button"
          href="https://www.linkedin.com/company/log2base2/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </footer>
      {/* footer ends */}
    </Fragment>
  );
}
