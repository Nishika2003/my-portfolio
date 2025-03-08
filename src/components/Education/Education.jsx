import React from "react";
import styles from "./Education.module.css";
import uni from "../../assets/education/uni.png"
import clg from "../../assets/education/clg.png"
import scl from "../../assets/education/scl.png"
import award from "../../assets/education/award.png";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      {/* Left Section - Education Details */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Education</h2>
        <ul className={styles.educationList}>
          <li className={styles.educationItem}>
            <img src={uni} alt="University icon" />
            <div className={styles.educationText}>
              <h3>VIT-AP University, Amaravati</h3>
              <p><strong>B.Tech - CSE (AI & ML)</strong></p>
              <p>2021 - Present</p>
              <p>CGPA: 9.42</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={clg} alt="College icon" />
            <div className={styles.educationText}>
              <h3>Little Flower Junior College</h3>
              <p><strong>Intermediate - MPC (SSC)</strong></p>
              <p>2019 - 2021</p>
              <p>Percentage: 97.6</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={scl} alt="School icon" />
            <div className={styles.educationText}>
              <h3>Dr. KKR Gowtham School</h3>
              <p><strong>High School (CBSE)</strong></p>
              <p>2018 - 2019</p>
              <p>Percentage: 94.2</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Section - Profile Picture */}
      <div className={styles.rightSection}>
        <img src={award} alt="Nishika's Profile" className={styles.profileImage} />
      </div>
    </section>
  );
};
