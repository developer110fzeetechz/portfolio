import React from "react";
import { motion, Variants } from "framer-motion";
import "./ProfileSection.css";
import profilePic from "../../assets/myprofile.jpg"; // Ensure the path is correct

// Define TypeScript Types for Variants
const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const bounceText: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
};

const ProfileSection: React.FC = () => {
  return (
    <div className="profile-container">
      {/* Left Section */}
      <motion.div className="profile-text" variants={textContainer} initial="hidden" animate="visible">
        <motion.h2 variants={textItem}>MD</motion.h2>
        <motion.h1 variants={bounceText} animate="animate">ATIQUR</motion.h1>
        <motion.p variants={textItem}>
          I'm a passionate MERN Stack Developer with expertise in building scalable, high-performance web applications.
          With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I love turning complex problems into
          elegant solutions.
        </motion.p>
      </motion.div>

      {/* Profile Image */}
      <motion.div className="profile-image" variants={imageVariant} initial="hidden" animate="visible" whileHover="hover">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </motion.div>

      {/* Right Section */}
      <motion.div className="profile-text" variants={textContainer} initial="hidden" animate="visible">
        <h2 style={{ visibility: "hidden" }}>MD</h2>
        <motion.h1 variants={bounceText} animate="animate">RAHMAN</motion.h1>
        <motion.p variants={textItem}>
          I'm a passionate React Native Developer with experience in building high-performance, scalable, and visually
          stunning mobile applications for both iOS and Android. With expertise in JavaScript, TypeScript, React Native,
          and Expo, I bring ideas to life with smooth UIs and dynamic user experiences.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
