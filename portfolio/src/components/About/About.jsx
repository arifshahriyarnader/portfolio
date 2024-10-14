import React from "react";
import HeroImage from "../assets/images/suit-nader.png";
import Resume from '../assets/files/ArifShahriyarNaderResume.pdf';

const About = () => {
  return (
    <div>
      <div className="flex self-center justify-between flex-col p-24 md:flex-row">
        <div className="py-14 px-20 hero_text">
          <h2 className="text-[#333333] pt-14 text-4xl font-bold">
            Hi, I'm Arif Shahriyar Nader
          </h2>
          <p className="text-lg pt-5">
            A Passionate Developer and Tech Enthusiast from Bangladesh,
            <br />I always love to learn new technologies and I'm also a quick
            learner.
          </p>
          <div className="mt-10 resume">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 w-56 flex flex-col md:flex-row text-lg font-bold border-2
              border-solid border-orange-500 rounded-md
               cursor-pointer hover:text-[#fff] hover:bg-[#333333]
              resume_download"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="pt-12 pr-20 hero_img">
          <img src={HeroImage} alt="Nader" className="w-45 hero_image" />
        </div>
      </div>
    </div>
  );
};

export default About;
