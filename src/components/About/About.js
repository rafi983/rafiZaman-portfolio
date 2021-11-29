import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Menubar from "../Menubar/Menubar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Spinner } from "react-bootstrap";

const About = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://aqueous-sands-35387.herokuapp.com/about")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(true);
      });
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="background">
      <Menubar />
      {loading ? (
        <Container>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: 700 }}
          >
            About <span style={{ color: "#FFB400" }}>Me</span>
          </Typography>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "4rem", alignItems: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="h4" sx={{ mt: 5, fontWeight: 600 }}>
                Need to Know Me!
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>Name: </span> Rafi
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>Age: </span> 23
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>Address: </span> Mymensingh
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>Nationality: </span>
                Bangladesh
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>University: </span> RUET
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                <span style={{ color: "#FFB400" }}>Email: </span>
                rafiirfan211@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2}>
                {info?.map((inf) => (
                  <Grid item xs={12} sm={12} md={6} lg={6} key={inf?._id}>
                    <Card
                      sx={{ minWidth: 275 }}
                      style={{
                        backgroundColor: "#111111",
                        border: "7px solid #FFB400",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          style={{
                            fontWeight: 700,
                            fontSize: "3rem",
                            color: "#FFB400",
                          }}
                        >
                          {inf.numbers}
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ fontWeight: 500, color: "#fff" }}
                        >
                          {inf.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Spinner
          animation="grow"
          variant="light"
          style={{ marginLeft: "50%", marginTop: "20%" }}
        />
      )}
    </div>
  );
};

export default About;
