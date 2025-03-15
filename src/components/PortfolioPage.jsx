// import React from "react";
import profileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          I am a passionate MERN Stack Developer with expertise in Next.js & TypeScript.
I specialize in crafting responsive, user-friendly interfaces and seamless web experiences.
Currently, I work at Content Arcade, contributing to innovative product-based solutions.
I love exploring new technologies and constantly improving my development skills. 🚀✨
My goal is to build efficient, scalable, and high-performance web applications.
         </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
