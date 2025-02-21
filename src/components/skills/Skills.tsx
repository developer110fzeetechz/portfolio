"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Define the structure of skillsData
const skillsData: Record<string, { name: string; icon: string }[]> = {
  FrontEnd: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🔗" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "🔷" },
  ],
  BackEnd: [
    { name: "Node.js", icon: "🌿" },
    { name: "Express.js", icon: "🚀" },
    { name: "Nest.js", icon: "🏗️" },
  ],
  DataBase: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebase", icon: "🔥" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Expo", icon: "🎭" },
    { name: "Redux Toolkit", icon: "🛠️" },
  ],
};

// Define tab structure
interface Tab {
  icon: string;
  label: keyof typeof skillsData; // Ensures only valid keys are used
}

const allTabs: Tab[] = [
  { icon: "", label: "FrontEnd" },
  { icon: "", label: "BackEnd" },
  { icon: "", label: "DataBase" },
  { icon: "", label: "Mobile" },
];

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState<Tab>(allTabs[0]);

  return (
    <div style={container}>
      <h1 className="aboutMeHeader text-center mt-5">Skills</h1>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {allTabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#333" : "transparent",
                color: item === selectedTab ? "#fff" : "#bbb",
              }}
              style={tab}
              onClick={() => setSelectedTab(item)}
              onTouchStart={() => setSelectedTab(item)} // Ensure mobile compatibility
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div style={underline} layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={content}
          >
            {skillsData[selectedTab.label].map((tech) => (
              <motion.div
                key={tech.name}
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                style={techItem}
              >
                {tech.icon} {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  width: "100%",
  maxWidth: 600,
  height: "auto",
  background: "#000",
  overflow: "hidden",
  boxShadow:
    "0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 2px rgba(255, 255, 255, 0.1)",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  color: "#fff",
};

const nav: React.CSSProperties = {
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
};

const tabsContainer: React.CSSProperties = {
  display: "flex",
  width: "100%",
  padding: 0,
  margin: 0,
  listStyle: "none",
};

const tab: React.CSSProperties = {
  borderRadius: 5,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  cursor: "pointer",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  fontWeight: "bold",
  fontSize: "14px",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -10,
  left: 0,
  right: 0,
  height: 2,
  background: "#3498db",
};

const contentContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "20px",
};

const content: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

const techItem: React.CSSProperties = {
  background: "#333",
  padding: "8px 12px",
  borderRadius: "8px",
  margin: "5px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  fontWeight: "bold",
};

