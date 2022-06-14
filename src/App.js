import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyUsers from "./components/company-carousel";
import UniversityUsers from "./components/university-carousel";
import Testimonials from "./components/testimonials";
import { Button, Navbar } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar
        className="navbar fixed-top border border-bottom w-100"
        bg="light"
      >
        <div className="col-11 col-xl-10 px-xl-3 mx-auto d-flex justify-content-between">
          <span className="h2 text-primary">@ Log2Base2</span>
          <Button className="primary-btn btn-sm px-3">Try for FREE</Button>
        </div>
      </Navbar>
      <CompanyUsers />
      <UniversityUsers />
      <Testimonials />
    </>
  );
}
