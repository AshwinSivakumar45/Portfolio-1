import Crowdfunding from "../Component/Assests/Crowd Funding.png";
import Swiggy from "../Component/Assests/Swiggy Clone.png";
import Turf from "../Component/Assests/Turf booking website.png";
import RockPaperScissor from "../Component/Assests/Rock Paper Scissor.png";
import Food from "../Component/Assests/food website.png";

const projects = [
  {
    image: Crowdfunding,
    title: "Pay Fund",
    description:"FundCommunity is a MERN stack crowdfunding platform that connects creators with supporters. It allows users to create campaign pages and set funding goals.",
    previewLink: "#",
    githubLink: "#",
  },
  {
    image: Turf,
    title: "Turf Booking",
    description: "I developed a Turf Booking Website named TURF NEXUS using the MERN stack. This website allows users to book sports turf slots seamlessly, manage reservations.",
    previewLink: "#",
    githubLink: "#",
  },
  {
    image: RockPaperScissor,
    title: "Rock Paper Scissors",
    description:"Rock Paper Scissor is a MERN stack game platform that enables players to challenge each other in classic rock paper-scissors matches.",
    previewLink: "#",
    githubLink: "#",
  },
  {
    image: Swiggy,
    title: "Swiggy Clone",
    description:"A responsive Swiggy clone built with HTML & CSS for a seamless food delivery experience, restaurant data and showcasing real-world UI design practices.",
    previewLink: "#",
    githubLink: "#",
  },
  {
    image: Food,
    title: "Food Website",
    description:"A modern food delivery website showcasing a clean and user-friendly interface, designed with HTML & CSS and styled-components for responsive layouts.",
    previewLink: "#",
    githubLink: "#",
  },
];

const Project = () => {
    return (
      <div className="bg-gray-800 py-10">
        <p className="text-white font-bold text-4xl text-start ml-10">My Projects</p>
        <hr className="mb-10 ml-10 w-44 text-red-600"/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-5 md:px-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm shadow-red-600 transition-transform transform border border-red-600 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-52 rounded-2xl" />
              <div className="p-6 bg-[#fef2f2] rounded-b-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.previewLink} className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700" target="_blank">
                    Preview
                  </a>
                  <a href={project.githubLink} className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800" target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Project