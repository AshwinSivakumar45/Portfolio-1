import axios from "axios";
import Instagram from "../Component/Assests/Instagram.png";
import Facebook from "../Component/Assests/facebook.png";
import LinkedIn from "../Component/Assests/LinkIn.png";
import Email from "../Component/Assests/Email1.gif";
import { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  async function handleData(e) {
    console.log(Name,email,Message);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/message", {
        Name,
        Email: email,
        Message,
      });
      console.log("Message Sent:", response.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row bg-darkBlue p-8 text-white gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-medium mb-4 text-red-500">Get in Touch</h1>
        <p className="text-xl font-medium mb-6 text-gray-700">
          I'm always open to new opportunities and collaboration. Feel free to reach out!
        </p>
        <div className="flex gap-8 mt-5">
          <a href="https://www.instagram.com/thisis___ash/profilecard/?igsh=MW9pMjVsbzhmaTFpdw==" className="hover:opacity-80" target="_blank">
            <img src={Instagram} alt="Instagram" width={30} />
          </a>
          <a href="https://m.facebook.com/profile.php?id=100054237701575" className="hover:opacity-80" target="_blank" >
            <img src={Facebook} alt="Facebook" width={30} />
          </a>
          <a href="https://www.linkedin.com/in/ashwin-sivakumar15/"className="hover:opacity-80" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" width={30} />
          </a>
        </div>
        <div>
          <img src={Email} alt="Email Illustration" width={500} className="ml-14" />
        </div>
      </div>

      <div className="flex-1 bg-white text-black p-8 rounded-lg shadow-red-600 shadow-lg mt-10">
        <p className="text-4xl font-bold mb-6 text-red-600">Contact Me</p>
        <form onSubmit={handleData}>
          <div className="mb-4">
            <label className="block text-xl font-medium mb-1">Name</label>
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" value={Name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label className="block text-xl font-medium mb-1">Email</label>
            <input type="email" placeholder="Email"className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-xl font-medium mb-1">Message</label>
            <textarea placeholder="Enter Your Message" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" rows="4" value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
