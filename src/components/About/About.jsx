import React from "react";
import styles from "./About.module.css";

// ✅ Import images directly
import aboutImage from "../../assets/about/aboutImage.png";
import aiIcon from "../../assets/about/aiIcon.png";
import backendIcon from "../../assets/about/backendIcon.png";
import frontendIcon from "../../assets/about/frontendIcon.png";
import tradingIcon from "../../assets/about/tradingIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* ✅ Use direct import */}
        <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={aiIcon} alt="AI/ML Engineer icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Engineer</h3>
              <p>With a passion for artificial intelligence, I specialize in developing deep learning models, NLP applications, and computer vision solutions. My work involves optimizing AI pipelines and deploying scalable ML models for real-world use cases.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={backendIcon} alt="Backend Developer icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have hands-on experience in designing and implementing robust backend architectures, working with databases, and developing high-performance APIs that support large-scale applications.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={frontendIcon} alt="Frontend Developer icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Creating visually appealing and highly responsive web applications is my forte. I ensure seamless user experiences through modern UI frameworks, optimized rendering, and accessibility best practices.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={tradingIcon} alt="Trader icon" />
            <div className={styles.aboutItemText}>
              <h3>Trader & Valuation Analyst</h3>
              <p>Beyond tech, I explore financial markets, focusing on quantitative trading strategies, market analysis, and valuation models. I apply data-driven decision-making techniques to optimize investment strategies.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
