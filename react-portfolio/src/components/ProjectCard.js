import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import projImg1 from "../assets/img/flavourfinder.png";
import projImg2 from "../assets/img/kickspot-print.png";
import projImg3 from "../assets/img/forkify.png";
import projImg4 from "../assets/img/galactic.png";
import projImg5 from "../assets/img/readme.png";
import projImg6 from "../assets/img/react-portfolio.png";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  deployLink,
  githubLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="deplinks">
            <Button id="but" variant="light" a href={deployLink} target="blank">
              WebSite
            </Button>{" "}
            <Button id="but" variant="light" a href={githubLink} target="blank">
              Github
            </Button>{" "}
          </div>
        </div>
      </div>
    </Col>
  );
};

export const ProjectsList = [
  {
    title: "React Portfolio",
    description: "Design & Development",
    imgUrl: projImg6,
    deployLink: "https://react-portfolio-bruno.netlify.app/",
    githubLink: "https://github.com/blaztted/react-portfolio",
  },
  {
    title: "Galactic Getaways",
    description: "Design & Development",
    imgUrl: projImg4,
    deployLink: "https://galactic-getaways.netlify.app/home",
    githubLink: "https://github.com/MoskaDowlatzay/galactic-getaways",
  },
  {
    title: "Forkify",
    description: "Design & Development",
    imgUrl: projImg3,
    deployLink: "https://forkify-brunofinal.netlify.app/",
    githubLink: "https://github.com/blaztted/forkify",
  },
  {
    title: "Kickspot Ecommerce",
    description: "Design & Development",
    imgUrl: projImg2,
    githubLink: "https://github.com/blaztted/kickspot-ecommerce",
  },
  {
    title: "Github Profile README Generator",
    description: "Development",
    imgUrl: projImg5,
    githubLink: "https://github.com/blaztted/README-generator",
  },
  {
    title: "Flavour Finder",
    description: "Design & Development",
    imgUrl: projImg1,
    deployLink: "https://blaztted.github.io/flavour-finder/",
    githubLink: "https://github.com/blaztted/flavour-finder?tab=readme-ov-file",
  },
];

export default ProjectsList;
