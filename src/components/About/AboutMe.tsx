import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const profilePic = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png";

const AboutMe = () => {
  return (
    <motion.div 
      className="about-section-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image */}
      <motion.div 
        className="about-section-image"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        <img src={profilePic} alt="Profile" />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="about-section-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>👋 Hi, I'm <span className="about-section-name">[Your Name]</span></h1>
        <h2 className="about-section-title">Software Engineer | Full Stack Developer</h2>
        <p className="about-section-description">
          I recently moved to New York City to advance my career in software development.
          I love solving problems, building scalable applications, and exploring new technologies.
        </p>
        <p className="about-section-hobbies">
          When I'm not coding, I enjoy <span>hiking</span>, <span>cooking</span>, and <span>spending time with my family</span>.
        </p>

        {/* Tech Stack */}
        <motion.div 
          className="about-section-tech"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {["React.js", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript"].map((tech, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* GitHub Link */}
        <motion.a 
          href="https://www.github.com/username_0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="about-section-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🚀 Check Out My GitHub
        </motion.a>

        {/* Last Updated */}
        <motion.p 
          className="about-section-last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Last updated: <span>April 15, 2023</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
