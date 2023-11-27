import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

import AudioPlayer from "./music/AudioPlayer";

const Projects = () => {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my <strong className="purple"> Songs </strong> I'have{" "}
            <span className="purple"> Sung</span>
          </p>
        </Container>
      </Container>
      <AudioPlayer />
    </div>
  );
};

export default Projects;
