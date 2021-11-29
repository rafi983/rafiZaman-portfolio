import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menubar from "../Menubar/Menubar";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-sands-35387.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="background2">
      <Menubar />
      <Container>
        <Grid container spacing={2} style={{ marginTop: "2.5rem" }}>
          {projects?.map((project) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={project?._id}>
              <Card
                sx={{
                  height: "450px",
                  backgroundColor: "#130f40",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="260"
                  image={project.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ fontWeight: 700, color: "#fff" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.desc}</Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <a
                      href={project.live}
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                      target="_blank"
                    >
                      Live-site
                    </a>
                  </Button>

                  <Button>
                    <a
                      href={project.code}
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                      target="_blank"
                    >
                      Source-code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
