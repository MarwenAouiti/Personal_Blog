import React, { Component } from "react";

import Field from "../common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "your name"
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "your email"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "your phone number"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "textarea",
        placeholder: "your message"
      }
    ]
  ]
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                onSubmit={this.props.handleSubmit}
                name="sentMessage"
                novalidate="novalidate"
              >
                <div className="row">
                  {fields.sections.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// wrap Component before begin exported
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "are you fuchking with me")
      .required("You shouldn't levae this empty"),
    email: Yup.string()
      .email("invalid mail")
      .required("no no no fill that shit"),
    phone: Yup.string()
      .min(10, "invalid phone num")
      .max(15, "Too long shit")
      .required("awww you are very stupid don't you"),
    message: Yup.string()
      .min(500, "Come one asshole Talk!!")
      .required("msg is required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("hhhhhhh", values);
    alert("You submitted the form", JSON.stringify(values));
  }
})(Contact);
