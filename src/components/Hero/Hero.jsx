import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Nishika!</h1>
        <p className={styles.description}>
          I am Nishika Gudla, an AI/ML Enthusiast, Coder, Innovator, and Trader
          from Vijayawada, India. Currently pursuing my Bachelor of Technology
          in CSE with AI & ML at Vellore Institute of Technology, Amaravati, I
          have a strong passion for developing impactful technology solutions.
          <br />
          <br />
          With experience as a Software Development Intern at STAIR Digital, I
          have contributed to AI-driven solutions, web development, and
          financial valuations. My expertise spans across Machine Learning,
          Full-Stack Development, Data Analytics, and Trading, allowing me to
          build innovative applications that bridge technology and real-world
          problem-solving.
        </p>

        {/* Button Container */}
        <div className={styles.buttonContainer}>
          <a
            href="https://drive.google.com/file/d/1CKjuUWuH_UotEWRL5rqqGPglkcqJTRBg/view?usp=sharing"
            className={styles.button}
            target = "_blank"
          >
            Resume
          </a>
          <a
            href="https://drive.google.com/drive/folders/1SjWAxHpXte1mHcvaTBmwmN6fmKIgqbnw"
            className={styles.button}
            target = "_blank"
          >
            Certifications
          </a>
        </div>
      </div>

      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
