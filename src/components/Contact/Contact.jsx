import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {/* Email */}
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gnishika30@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-mail Id
          </a>
        </li>

        {/* LinkedIn */}
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/nishikagudla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        {/* GitHub */}
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a
            href="https://github.com/Nishika2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
