import React, { Component } from "react";
import SingleService from "./SingleService";
const services = [
  {
    title: "Full-Stack Dev",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    icon: "fa-laptop"
  },
  {
    title: "Mobile Dev",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    icon: "fa-mobile-alt"
  },
  {
    title: "Data Analysis",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
    icon: "fas fa-chart-pie"
  }
];

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            {services.map((service, index) => {
              // passing props from object
              return <SingleService {...service} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
