// import React from "react";
// import { motion } from "framer-motion";
// import { myDetails } from "../../helper/details";
// import "../../stylesheet/AboutMe.css"; //

// const Body = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="about-container"
//     >
//       {/* Animated Name */}
//       <motion.h1
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="about-name"
//       >
//         Hi, I'm {myDetails.name} 👋
//       </motion.h1>

//       {/* Animated Role */}
//       <motion.h2
//         initial={{ y: -30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="about-role"
//       >
//         Full Stack Developer | MERN Stack | React Native
//       </motion.h2>

//       {/* Technologies */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={techContainerVariants}
//         className="about-tech-container"
//       >
//         {myDetails.tech.map((tech, index) => (
//           <motion.span key={index} variants={techItemVariants} className="about-tech-item">
//             {tech}
//           </motion.span>
//         ))}
//       </motion.div>

//       {/* About Me Description */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className="about-text"
//       >
//         Passionate about <strong>building modern web & mobile applications</strong> that are{" "}
//         <strong>efficient, scalable, and user-friendly</strong>. I thrive in{" "}
//         <strong>problem-solving, optimizing performance, and creating seamless user experiences</strong>.
//       </motion.p>

//       {/* Call to Action Button */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//         className="about-button-container"
//       >
//         <a href="#contact" className="about-button">
//           Let's Work Together 🚀
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Framer Motion Variants
// const techContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const techItemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default Body;

import React from "react";
import { motion } from "framer-motion";
import "./ProfileSection.css";
import profilePic from "../../assets/myprofile.jpg"; // Ensure the path is correct

// Staggered Text Animation
const textContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
};

// Individual Text Animation
const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Image Animation
const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

// Bounce Effect for Headings
const bounceText = {
  animate: {
    y: [0, -5, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
};

const ProfileSection = () => {
  return (
    <div className="profile-container">
      {/* Left Section */}
      <motion.div className="profile-text" variants={textContainer} initial="hidden" animate="visible">
        <motion.h2 variants={textItem} animate="animate">MD</motion.h2>
        <motion.h1 variants={bounceText} initial="initial" animate="animate">ATIQUR</motion.h1>
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
        <motion.h1 variants={bounceText} initial="initial" animate="animate">RAHMAN</motion.h1>
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
