
import { motion } from "framer-motion";
import "./Body.css";
import image from "../../assets/myprofile.png";

const Body = () => {
  return (
    <div className="grids">
      {/* Left Section */}
      <motion.section
        className="grid-1 grid-item"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <section className="section-1">
          <h2 className="md">MD</h2>
          <h1 className="name">ATIQUR</h1>
          <p>
            I'm a passionate MERN Stack Developer with expertise in building
            scalable, high-performance web applications. With a strong
            foundation in MongoDB, Express.js, React.js, and Node.js, I love
            turning complex problems into elegant solutions.
          </p>
        </section>
        <section className="responsive-section">
        <h2 className="md">MD</h2>
        <h1 className="name">ATIQUR RAHMAN</h1>
          <p className="mt-4">
            I'm a <strong>MERN Stack & React Native Developer</strong>, skilled
            in <strong>MongoDB, Express.js, React.js, Node.js, and React Native</strong>. 
            I build <strong>scalable web and mobile apps</strong> with smooth UIs and 
            great user experiences.
          </p>
          <p>
            Proficient in <strong>JavaScript, TypeScript, and Expo</strong>, I develop 
            high-performance solutions for <strong>iOS, Android, and web</strong>, turning 
            ideas into reality.
          </p>
        </section>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="grid-2 grid-item"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img className="img" src={image} alt="myprofile" />
      </motion.section>

      {/* Right Section */}
      <motion.section
        className="grid-3 grid-item"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="hidetext">RAHMAN</h2>
        <h1 className="name">RAHMAN</h1>
        <p>
          I'm a passionate React Native Developer with experience in building
          high-performance, scalable, and visually stunning mobile applications
          for both iOS and Android. With expertise in JavaScript, TypeScript,
          React Native, and Expo, I bring ideas to life with smooth UIs and
          dynamic user experiences.
        </p>
      </motion.section>
    </div>
  );
};

export default Body;
