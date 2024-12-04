import Html from "../Component/Assests/Html.png";
import Css from "../Component/Assests/CSS.png";
import Js from "../Component/Assests/JS.png";
import ReactLogo from "../Component/Assests/React.png";
import Node from "../Component/Assests/NodeJS.png";
import Figma from "../Component/Assests/figma.png";
import Express from "../Component/Assests/Express.png";
import Tailwind from "../Component/Assests/download.png"
import Mongodb from "../Component/Assests/download.svg"
import Bootstrap from "../Component/Assests/Bootstrap-C98tbYSA.png"
import MERN from "../Component/Assests/mernstack.png"

const SkillCard = ({ image, label }) => {
  return (
    <div>
        <div className="flex border border-red-300 p-4 rounded-xl items-center">
        <img src={image} alt={label} width={48} className="rounded-full" />
        <h1 className="font-medium text-xl ml-4">{label}</h1>
        </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="px-8 py-12 min-h-screen bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-xl lg:text-2xl font-semibold text-red-600">About Me</h1>
        <p className="text-4xl text-gray-700 mt-4 font-bold">Hi, I'm ASHWIN</p>
        <p className="text-lg text-gray-600 mt-2">
          A Full-Stack Developer with expertise in web development and the MERN stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="lg:w-1/2 text-gray-700">
          <p className="text-2xl text-black font-medium">My Journey</p>
          <hr className="w-32 "/>
          <p className="mt-4 text-lg">
            I began my journey in web development driven by a passion for creating intuitive and
            scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have developed projects like a full-stack crowdfunding platform, a job portal, a Rock Paper Scissors game, a Swiggy website clone, and am currently working on a full-stack turf booking system. These projects highlight my ability to integrate robust backend solutions with sleek, user-friendly front-end designs.
          </p>
          <img src={MERN} alt="" className="mt-16" />
        </div>

        <div className="lg:w-1/2 ">
          <p className="text-2xl text-red-600 font-medium ">Skills & Expertise</p>
          <hr className="w-48 mb-4"/>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 drop-shadow-lg">
            <SkillCard image={Html} label="HTML" />
            <SkillCard image={Css} label="CSS" />
            <SkillCard image={Js} label="JavaScript" />
            <SkillCard image={ReactLogo} label="React JS" />
            <SkillCard image={Node} label="Node.js" />
            <SkillCard image={Express} label="Express JS" />
            <SkillCard image={Tailwind} label="Tailwind" />
            <SkillCard image={Bootstrap} label="Bootstrap" />
            <SkillCard image={Mongodb} label="Mongo DB" />
            <SkillCard image={Figma} label="Figma" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-red-600 font-medium text-2xl">More About me</p>
        <hr className="w-44"/>
        <p className="text-gray-700 mt-4 text-xl">Beyond technical expertise, I am a problem solver at heart who thrives on challenges and loves crafting innovative solutions to complex problems. 🌟 I’m driven by a passion for continuous learning 📚 and staying ahead of the curve with the latest trends in web development 🌐.🤝 Whether collaborating with a team or working independently, I am committed to delivering high-quality results that not only meet but exceed expectations. 🎯 My blend of creativity 🎨 and meticulous attention to detail 🔍 empowers me to transform ideas into impactful applications that provide real-world value. 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
