"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { Header } from "@/component/header/header";

const ContactForm = () => {
  return (
    <>
     <Header/>
     <section className="contactus">
     <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Let’s discuss how we can help your business grow.</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          company: "",
          inquiry: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Full Name is required"),
          email: Yup.string().email("Invalid email address").required("Email is required"),
          company: Yup.string().required("Company Name is required"),
          inquiry: Yup.string().required("Please select an inquiry type"),
          message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .required("Message is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data: ", values);
          alert("Thank you! We will get back to you soon.");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="form-group">
              <Field type="text" name="name" placeholder="Full Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <Field type="text" name="company" placeholder="Company Name" />
              <ErrorMessage name="company" component="div" className="error" />
            </div>

            <div className="form-group">
              <Field as="select" name="inquiry">
                <option value="">Select Inquiry Type</option>
                <option value="website">Website Development</option>
                <option value="app">Mobile App Development</option>
                <option value="ecommerce">E-Commerce Solutions</option>
                <option value="consulting">Business Consulting</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="inquiry" component="div" className="error" />
            </div>

            <div className="form-group">
              <Field as="textarea" name="message" placeholder="Your Message..." rows="4" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </section>
    </>
   
   
  );
};

export default ContactForm;
