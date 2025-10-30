import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import "./App.css";
import profile from "./JP_Email.png";
import bg from "./Miami_View_Image.jpg";
import sports from "./sports.jpg";
import academics from "./academics.jpg";

export default function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <section
        id="header"
        className="header"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 20, 0.6), rgba(10, 10, 20, 0.6)), url(${bg})`,
        }}
      >
        <div className="header-content">
          <div className="header-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              João Domingues
            </motion.h1>
            <motion.p
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Graduate Student-Athlete in Mechanical Engineering at Florida
              International University. 
              Aspiring Financial Analyst leveraging
              quantitative and programming skills to bridge engineering
              precision with financial insight.
            </motion.p>
          </div>

          <motion.img
            src={profile}
            alt="João Domingues"
            className="header-photo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          />
        </div>

      </section>
      <nav className="nav-bar">
        <a href="#about">About Me</a>
        <a href="#sports">Sports</a>
        <a href="#academics">Academics</a>
        <a href="#academic_projects">Academics</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* ABOUT ME */}
      <section 
      id="about"
      className="about-me">
        <h2>About Me</h2>
        <p>
          Being both a full-time student and Division I athlete has never been
          an easy role, but it has been one of the most defining experiences of
          my life. Waking up at dawn for training sessions, followed by gym and
          recovery work, and then diving into long afternoons of classes,
          studies, and engineering projects has taught me discipline, time
          management, and the ability to perform under pressure. These
          experiences shaped my adaptability and built a mindset rooted in
          consistency, perseverance, and purpose. While my athletic commitments
          have limited my participation in extracurriculars, I have consistently
          demonstrated academic excellence, maintaining a 3.89 GPA and excelling
          in rigorous technical courses. Through both coursework and hands-on
          experience — including Formula SAE and engineering internships — I
          have developed a practical understanding supported by applied
          experience in programming, SolidWorks, MATLAB, and data analysis. As I
          prepare to transition into finance, I am motivated to apply my
          analytical mindset, curiosity, and work ethic to the financial world.
        </p>
      </section>
      
      {/* SPORTS */}
      <section 
      id="sports"
      className="split-section">
        <div className="split-text">
          <h2>Sports</h2>
          <p>
            Competing as a Division I student-athlete has been one of the most
            formative parts of my life. It has taught me teamwork, resilience,
            and how to perform under pressure — qualities that directly
            translate into my academic and professional work. On the field, I
            ’ve learned to lead, adapt quickly, and maintain focus through
            challenges — values I carry into every aspect of my life.
          </p>
        </div>
        <div className="split-img">
          <img src={sports} alt="Sports" />
        </div>
      </section>

      {/* ACADEMICS */}
      <section 
      id = "academics"
      className="split-section reverse">
        <div className="split-img">
          <img src={academics} alt="Academics" />
        </div>
        <div className="split-text">
          <h2>Academics</h2>
          <p>
            As a Mechanical Engineering student at Florida International
            University, I have developed strong analytical, technical, and
            problem-solving skills. With a 3.89 GPA, I’ve balanced demanding
            coursework with athletics while pursuing my interest in data-driven
            decision-making. My technical foundation in Python, MATLAB, and
            Excel allows me to approach problems with quantitative precision —
            skills I am eager to apply in the financial industry.
          </p>
        </div>
      </section>
      {/* Academic Projects */}
      <section 
      id= "academic_projects"
      className="academics-projects">
  <h2>Academic Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <h4>Stock Market Analysis</h4>
      <p>Analyzed real market data using Python and yfinance to visualize price trends and volatility.</p>
      <a href="/x.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
    </div>

    <div className="project-card">
      <h4>Mechanical System Simulation</h4>
      <p>Modeled and simulated dynamic systems using MATLAB to study vibration damping performance.</p>
      <a href="/saystem_simulation.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
    </div>
  </div>
</section>
    
      {/* CONTACT */}
      <section 
      id= "contact"
      className="contact">
        <h2>Contact</h2>
        <p>Let’s connect — I’m always open to new opportunities and discussions.</p>
        <div className="contact-links">
          <a href="mailto:joaodomingues.eng@gmail.com">
            <Mail size={22} /> joaodomingues.eng@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/joao-domingues-/">
            <Linkedin size={22} /> linkedin.com/in/joao-domingues-/
          </a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} João Domingues</footer>
    </div>
  );
}
