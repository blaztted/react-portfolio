import { Col } from "react-bootstrap";
//import projectsData from "./projectsData.json";
import projImg1 from "../assets/img/Earth.jpg";
import projImg2 from "../assets/img/Earth.jpg";
import projImg3 from "../assets/img/Earth.jpg";
//import projectsData from "./ProjectData.json";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const ProjectsList = [
  {
    title: "Kickspot Ecommerce",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "blablablalb",
    imgUrl: projImg3,
  },
];

// export const ProjectsList = projectsData;

export default ProjectsList;
