import Image from "../Component/Assests/Untitled-removebg-preview.png";
import Resume from "../Component/Assests/ASHWIN RESUME.pdf"


const Home = () => {
  return (
   <div>
        <div className="flex flex-col lg:flex-row justify-around  px-8 py-32 min-h-fit bg-gray-50 border border-gray-200">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <div>
                    <h1 className="text-6xl lg:text-8xl font-medium leading-tight">
                    <span className="text-black">Hi There,</span>
                    <br />
                    <span className="text-red-600">I'm ASHWIN</span>
                    </h1>
                </div>
                <div className="text-lg lg:text-xl text-gray-700 mt-6">

                    <h1 className="font-medium">MERN Stack Developer & Web Developer</h1>
                    <hr className=" w-80"/>
                    <h1 className="mt-4">
                        I'm a passionate MERN Stack developer with expertise in MongoDB,
                        Express.js, React, and Node.js. I specialize in building dynamic,
                        scalable, and user-friendly web applications. I love crafting
                        innovative solutions that solve real-world problems and delivering
                        seamless user experiences.
                    </h1>
                    <button className="p-3 border border-black bg-black rounded-xl mt-4 hover:bg-red-600 hover:scale-125 duration-300">
                        <a href={Resume} download className="text-white hover:font-medium">Download CV</a>
                    </button>
                </div>
            </div>
            <div>
                <img src={Image} alt="Ashwin's Profile" width={500}/>
            </div>
        </div>
   </div>
  );
};

export default Home;
