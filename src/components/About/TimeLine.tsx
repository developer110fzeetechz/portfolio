import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

interface TimelineItem {
  title: string;
  company: string; // New Company Name: "Technigos"
  location: string;
  description: string;
  year: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          className="timeline-item"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          
          <div className="timeline-dot"
          style={{
            background: index % 2 === 0 ? "#FF008C" : "#D309E1",
            left: index % 2 === 0 ? "0%" : "100%"
            
          }}
          
          ></div>
          <div className="timeline-content">
            <span className="year">{item.year}</span>
            <h3 className="title">{item.title}</h3>
            <h4 className="company">{item?.company}</h4> {/* New Company Name */}
            <h4 className="location">{item.location}</h4>
            <p className="description">{item.description}</p>
          </div>
        </motion.div>
      ))}
      <div className="timeline-line"></div>
    </div>
  );
};

export default Timeline;
