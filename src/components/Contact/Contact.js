import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Typography } from "@mui/material";
import Menubar from "../Menubar/Menubar";
import swal from "sweetalert";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_biexxky",
        "template_l03kpvk",
        form.current,
        "user_k37Uk3tTHfQybTsCYsDBt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => {
    swal("Good Job", "Thanks for contacting with me", "success");
  };
  return (
    <div className="background">
      <Menubar />
      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontWeight: 700, my: 5 }}
      >
        Get In <span style={{ color: "#FFB400" }}>Touch</span>
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#252525",
            width: "45%",
            padding: ".5rem",
            borderRadius: "2rem",
            color: "#fff",
          }}
          name="name"
        />
        <br />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#252525",
            width: "45%",
            padding: ".5rem",
            borderRadius: "2rem",
            color: "#fff",
          }}
          name="email"
        />
        <br />

        <textarea
          name="message"
          placeholder="Your message"
          rows={10}
          cols={50}
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#252525",
            width: "45%",
            padding: ".5rem",
            borderRadius: "2rem",
            color: "#fff",
          }}
        />

        <input
          type="submit"
          value="Send"
          onClick={handleClick}
          style={{
            padding: "1rem 3rem",
            backgroundColor: "#FFB400",
            fontSize: "1.4rem",
            fontWeight: 600,
            border: "none",
            outline: "none",
            color: "#fff",
            borderRadius: "2rem",
            marginTop: "1rem",
          }}
        />
      </form>
    </div>
  );
};

export default Contact;
