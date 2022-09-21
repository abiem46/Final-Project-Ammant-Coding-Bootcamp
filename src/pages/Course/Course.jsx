import React from "react";
import CardMenu from "../../components/Card/CardMenu";
import AboutOne from "../../components/AllAbout/AboutOne";
import Navbar from "../../components/Layout/Navbar";

const Course = () => {
  return (
    <>
      <Navbar />
      <h1>Course</h1>
      <CardMenu />

      {/* Kelebihan KSB Smart */}
      <AboutOne />
    </>
  );
};

export default Course;
