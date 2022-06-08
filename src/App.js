import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanyUsers, Testimonials, UniversityUsers } from "./pages";

export default function App() {
  return (
    <>
      <CompanyUsers />
      <UniversityUsers />
      <Testimonials />
    </>
  );
}
