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
<section id="about" className="about-me">
  <h2>About Me</h2>
  <p>
    I was born and raised in <strong>Coimbra, Portugal</strong>, a small historic city known for its charm,
    culture, and academic spirit. Growing up there meant living in an environment where university life,
    community, and tradition blend together — a place where everyone knows everyone, and where ambition
    quietly grows alongside familiarity.
  </p>
  <p>
    From a young age, I found joy and purpose in <strong>soccer</strong>. What started as a passion quickly
    became a central part of my life — shaping my discipline, mindset, and dreams. It gave me direction,
    opened doors, and eventually took me across the world.
  </p>
  <p>
    At 18, I made one of the biggest decisions of my life: moving to <strong>Miami, Florida</strong>, to pursue
    my education and continue playing soccer. Leaving home, family, and friends behind was not easy, but it was
    a challenge I welcomed with excitement and curiosity. I arrived in a new country without knowing anyone,
    guided only by the belief that growth often comes from stepping into the unknown.
  </p>
  <p>
    Since then, life has been a collection of moments that have shaped who I am — long days balancing studies and
    training, quiet nights reflecting on how far I’ve come, and countless experiences that have broadened my view
    of the world. I’ve made lifelong friends, learned from different cultures, and grown in ways I never could have
    imagined back in Coimbra.
  </p>
  <p>
    Now, as I prepare to graduate with a <strong>Bachelor’s degree in Mechanical Engineering from Florida International University</strong>,
    I look back with gratitude. Every step of this journey — from the narrow streets of Coimbra to the vibrant city
    of Miami — has been a lesson in independence, adaptation, and appreciation for the paths that life opens when you dare to take them.
  </p>
</section>

{/* SPORTS */}
<section id="sports" className="split-section">
  <div className="split-text">
    <h2>Sports</h2>
    <p>
      Soccer has been a defining part of my life — not just a sport, but a journey that has shaped who I am as a person,
      a student, and a teammate.
    </p>
    <p>
      Growing up in Coimbra, Portugal, I began playing for Associação Académica de Coimbra,
      one of the country’s most historic clubs. It was there that I learned the foundations of teamwork, responsibility,
      and commitment — lessons that would carry me far beyond the field. Later, I also had the opportunity to spend time in
      FC Porto’s academy system, an experience that exposed me to a higher level of professionalism and competition
      at a young age.
    </p>
    <p>
      That early foundation opened doors to an even greater challenge — continuing my soccer career while pursuing higher education
      in the United States. I joined the Florida International University (FIU) Men’s Soccer Team, competing at the Division I level.
      Playing in the American Athletic Conference has been an experience of intensity, growth, and pride.
    </p>
    <p>
      Throughout my time at FIU, I have been fortunate to receive multiple recognitions that reflect not just personal effort,
      but the collective dedication of my teammates and coaches. Among these honors are:
    </p>
    <ul>
      <li>2025 - Men’s Soccer Pre-season All-Conference Team       </li>
      <li>2024 - Men’s Soccer All-Conference Tournament Team       </li>
      <li>2024 - American Athletic Conference All-Academic Team    </li>
      <li>2024 - Men’s Soccer Pre-season All-Conference Team       </li>
      <li>2023 - Men’s Soccer Second Team All-Conference           </li>
      <li>2022 - Men’s Soccer Rookie Team All-Conference           </li>
      <li>2022 - American Athletic Conference Champions            </li>
      <li>2022 - American Athletic Conference Tournament Champions </li>
    </ul>
    <p>
      Each of these milestones reminds me that success in sports, as in life, comes from perseverance, discipline, and the ability
      to adapt under pressure. Soccer has taught me to thrive in competitive environments, to work relentlessly toward collective goals,
      and to balance ambition with humility.
    </p>
    <p>
      What began as a childhood dream in Coimbra has turned into a life-changing adventure — from local pitches to international stadiums,
      and from teammates who became family to achievements that taught me the meaning of purpose and persistence.
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
