
import './AboutMe.css';
import TimeLine from './TimeLine.js';

const AboutMe = () => {
  const timelineData = [
    {
      title: "Fullstack & React Native Developer",
      location: "Jaipur, Rajasthan",
      description: "Joined as a MERN Stack & React Native Developer",
      year: "2023 - Present",
      company: "Fzeetechz Pvt Ltd"
    },
    {
      title: "Internship",
      location: "Mohali, Punjab",
      description: "Internship as a React.js Developer",
      year: "2022 - 2023",
      company: "Omninos Solutions, Mohali"
    },
    {
      title: "M.Tech",
      location: "Jaipur, Rajasthan",
      description: "Master of Technology in Software Engineering",
      year: "2022 - 2024",
      company: "University of Technology, Vatika"
    }, 
    {
      title: "B.Tech",
      location: "Jaipur, Rajasthan",
      description: "Bachelor of Technology in Software Engineering",
      year: "2017 - 2021",
      company: "RCERT, Sitapur"
    },
  ];

  return (
    <div className='aboutsection'>
      <div className='aboutMeContainer'>
        <h1 className='aboutMeHeader'>About Me</h1>
      <div className='about-content'>  <p>
          I'm <strong>Md Atiqur Rahman</strong>, a passionate <strong>Fullstack & React Native Developer</strong> from Bihar, India. 
          With a strong background in <strong>MERN Stack</strong> and mobile app development, I specialize in building scalable, high-performance web and mobile applications.
        </p>
        <p>
          Currently, I am working at <strong>Fzeetechz Pvt Ltd</strong> as a <strong>Fullstack & React Native Developer</strong>, where I contribute to building innovative solutions in web and mobile development.
          Prior to this, I completed an internship as a <strong>React.js Developer</strong> at Omninos Solutions, gaining hands-on experience in front-end technologies.
        </p>
        <p>
          My educational journey includes a <strong>Bachelor's (B.Tech)</strong> and a <strong>Master's (M.Tech)</strong> in Software Engineering. 
          Beyond coding, I am always eager to learn new technologies, solve complex problems, and collaborate on exciting projects.
        </p></div>
        <TimeLine items={timelineData} />
      </div>
    </div>
  );
};

export default AboutMe;
