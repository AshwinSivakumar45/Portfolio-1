import { Link } from 'react-scroll';
import { useState } from 'react';
import menu from "../Component/Assests/menu.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-white border  border-gray-200 fixed top-0 right-0 left-0 z-50">
        <div>
        
          <h1 className='ml-5 hover:scale-125 translate-x-4 duration-700'>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            <span className="text-red-600 text-3xl font-bold cursor-pointer">Ashwin</span>{" "}
            <span className="text-black text-3xl font-medium cursor-pointer">Sivakumar</span>
          </Link>
          </h1>
        
        </div>

        <button className="block lg:hidden text-gray-800 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="" width={40} />
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:space-x-8 mt-4 lg:mt-0 mr-14`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
            <li className="font-bold text-gray-800 cursor-pointer hover:text-red-500 duration-300 text-xl">
              <Link to="about" smooth={true} duration={500} offset={-70}>
                About
              </Link>
            </li>
            <li className="font-bold text-gray-800 cursor-pointer hover:text-red-500 duration-300 text-xl">
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                Projects
              </Link>
            </li>
            <li className="font-bold text-gray-800 cursor-pointer hover:text-red-500 duration-300 text-xl">
              <Link to="Contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
