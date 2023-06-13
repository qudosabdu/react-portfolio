import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right scale-x-[-1]]" //object-right scale-x-[-1]
        src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/317488971_3359343797673856_3574871100126142909_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=J66qFd-ScFIAX9iK1ec&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfAi4o1Ey3qqo9uXpyd2vigHIxBmJjJ8JZW6r5k1_ka66w&oe=6488E918"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="w-[700px] mx-auto h-full flex flex-col justify-center items-center lg:item-start">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'am Abdul Qudoos</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'am a
            <TypeAnimation
              sequence={[
                " Developer", // Types 'One'
                2000, // Waits 2s
                " Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                " Freelancer", // Types 'Three' without deleting 'Two',
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
            />
          </h2>
          <div className="flex justify-between max-w-[200px] pt-6 w-full ">
          <FaFacebookF className="cursor-pointer hover:scale-110 ease-in duration-100" size={20} />
          <FaTwitter className="cursor-pointer hover:scale-110 ease-in duration-100" size={20} />
          <FaLinkedin className="cursor-pointer hover:scale-110 ease-in duration-100" size={20} />
          <FaInstagram className="cursor-pointer hover:scale-110 ease-in duration-100" size={20} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
