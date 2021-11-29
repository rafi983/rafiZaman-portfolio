import React from "react";
import "./Home.css";
import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import myImage from "../../images/myImage.jpg";
import Menubar from "../Menubar/Menubar";

const image = {
  borderRadius: "1.8rem",
  border: "8px solid #FFB400",
};

export const StyledButton = styled.button`
  background-image: linear-gradient(to right, #eab543, #ffb400);
  font-size: 1.5rem;
  font-weight: 700;
  color: #080808;
  margin-top: 1rem;
  padding: 0.7rem 1.1rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Home = () => {
  return (
    <div className="background">
      <Menubar />
      <Container>
        <Grid
          container
          spacing={2}
          style={{ paddingTop: "9rem", alignItems: "center" }}
        >
          <Grid item xs={11} sm={11} md={5} lg={5}>
            <img
              src={myImage}
              className="img"
              style={image}
              width="100%"
              alt=""
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Typography variant="h2">
              <span style={{ fontWeight: 500 }}>Hello, I'm</span> <br />
              <span style={{ fontWeight: 700, color: "#FFB400" }}>
                Rafi Irfan Zaman
              </span>
            </Typography>
            <Typography variant="h4" sx={{ my: 2 }}>
              A Front-End Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", color: "#808080" }}
            >
              I have been developing website for the last few months.After I
              came to development, I found my deep interests in front-end.
              Developed too many projects recent days.
            </Typography>
            <a href="./resume.pdf" download>
              <StyledButton>Download Resume</StyledButton>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
