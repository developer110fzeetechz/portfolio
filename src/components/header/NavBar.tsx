  import { Variants, motion } from "framer-motion";
  import {useRef, useState } from "react";

  interface NavBarProps {
    scrollToClass: (className: string) => void;
  }

  export default function NavBar({ scrollToClass }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement| null>(null);
    // const dimensions = useDimensions(containerRef);
    // console.log(dimensions)

    const scrollToClassfn = (className: string) => {
      setIsOpen(false);
      scrollToClass(className);
    };

    return (
      <div style={{
        position: "fixed",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    maxWidth: "100%",
    height:`${isOpen ? '100vh' : '100px'}`,
    borderRadius: 20,
    overflow: "hidden",
    zIndex: 10,
      }}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={100}
          ref={containerRef}
          style={nav}
        >
          <motion.div style={background} variants={sidebarVariants} />
          <Navigation scrollToClassfn={scrollToClassfn} />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </div>
    );
  }

  interface NavigationProps {
    scrollToClassfn: (className: string) => void;
  }

  const Navigation: React.FC<NavigationProps> = ({ scrollToClassfn }) => {
    const menuItems = [
      { name: "Home", className: "main-body" },
      { name: "About", className: "main-about" },
      { name: "Skills", className: "main-skills" },
      { name: "Projects", className: "projects" },
      { name: "Blogs", className: "blogs" },
      { name: "Contact", className: "contact" },
    ];

    return (
      <motion.ul style={list} variants={navVariants}>
        {menuItems.map((item, i) => (
          <MenuItem
            key={i}
            i={i}
            text={item.name}
            onClick={() => scrollToClassfn(item.className)}
          />
        ))}
      </motion.ul>
    );
  };

  interface MenuItemProps {
    i: number;
    text: string;
    onClick: () => void;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ i, text, onClick }) => {
    const border = `2px solid ${colors[i]}`;
    return (
      <motion.li
        style={listItem}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <div style={{ ...iconPlaceholder, border }} />
        <span style={textPlaceholder}>{text}</span>
      </motion.li>
    );
  };

  interface MenuToggleProps {
    toggle: () => void;
  }

  const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
    <button style={toggleContainer} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );

  interface PathProps {
    d?: string;
    variants: Variants;
    transition?: { duration: number };
  }

  const Path: React.FC<PathProps> = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#fff"
      strokeLinecap="round"
      {...props}
    />
  );

  const navVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  const sidebarVariants: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const colors = [
    "#FF008C",
    "#D309E1",
    "#9C1AFF",
    "#7700FF",
    "#D309E1",
    "#4400FF",
  ];


  const nav: React.CSSProperties = {
    width: 300,
    position: "relative",
  };

  const background: React.CSSProperties = {
    backgroundColor: "#111",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
  };

  const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: 18,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
  };

  const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
  };

  const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    cursor: "pointer",
  };

  const iconPlaceholder: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 20,
  };

  const textPlaceholder: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    cursor: "pointer",
  };

