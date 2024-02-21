import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import projImg1 from "../assets/img/flavourfinder.png";
import projImg2 from "../assets/img/Earth.jpg";
import projImg3 from "../assets/img/Earth.jpg";

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
            <Button variant="light" a href={deployLink} target="blank">
              WebSite
            </Button>{" "}
            <Button variant="light" a href={githubLink} target="blank">
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
    title: "Flavour Finder",
    description: "Design & Development",
    imgUrl: projImg1,
    deployLink: "https://blaztted.github.io/flavour-finder/",
    githubLink: "https://github.com/blaztted/flavour-finder?tab=readme-ov-file",
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg2,
    deployLink: "",
    githubLink: "",
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
    deployLink: "",
    githubLink: "",
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
    deployLink: "",
    githubLink: "",
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
    deployLink: "",
    githubLink: "",
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
    deployLink: "",
    githubLink: "",
  },
];

// export const ProjectsList = projectsData;
// export default ProjectCard;
export default ProjectsList;
