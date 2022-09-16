import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../img/Reskill-Americans.png";
import projImg2 from "../../img/Skill2Hired.png";
import projImg3 from "../../img/vasiti.png";
import projImg4 from "../../img/Zuri (2).png";
import projImg5 from "../../img/zuri.png";
import projImg6 from "../../img/block.png";
// import colorSharp2 from "../../img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Reskill American",
      description: "Educational Startup",
      imgUrl: projImg1,
      link:"https://reskillamericans.org/"
      
    },
    {
      title: "Skill2hired",
      description: "Training Startup",
      imgUrl: projImg2,
      link: "https://skill2hired.com/"
    },
    {
      title: "vasiti.com",
      description: "Ecommerce Startup",
      imgUrl: projImg3,
      link:"https://vasiti-next-website.vercel.app/"
    },
    {
      title: "Zuri inc",
      description: "Recuitment Statup",
      imgUrl: projImg4,
      link:"https://talent.zuri.team/"
    },
    {
      title: "Zuri inc",
      description: "Traning Startup",
      imgUrl: projImg5,
      link: "https://training.zuri.team/"
    },
    {
      title: "Blockgames",
      description: "Web3 training Startup" ,
      imgUrl: projImg6,
      link:"https://blockgames.gg/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row className="rows-box">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
export default Portfolio;