import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/img/header-bg.jpg";

// Re-usable components
import Services from "../common/Services";
import Portfolio from "../common/Protfolio";
import Team from "../common/Team";
import Timeline from "../common/Timeline";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To My Blog"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="View Articles"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default Home;
