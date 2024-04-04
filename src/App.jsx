import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={"our program"} title={"what we offer"} />
        <Programs />
        <About />
        <Title subTitle={"GALLERY"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"TESTIMONIALS"} title={"What Student Says"} />
        <Testimonials />
        <Title subTitle={"contact us"} title={"Get in touch"} />
        <Contact />
      </div>
    </div>
  );
};

export default App;
