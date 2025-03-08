import React from "react";
import styles from "./Achievements.module.css";
import sih from "../../assets/achievements/sih.jpg";  
import bglr from "../../assets/achievements/bglr.jpg"; 

export const Achievements = () => {
  const achievements = [
    " Winner of Smart India Hackathon 2023 - Women Security Theme",
    " Achieved 2nd Runner Up at IBM's EVolve Hackathon on the theme EV charging network management",
    " Secured 2nd place individually in Hyderabad's IET PATN competition",
    " Attained a top 5 position in 36-hour national hackathon conducted by GDSC SDG Open Hack 2023",
    " Qualified for iTech Hackfest final round on the Climate Action theme, outperforming over 120 teams"
  ];

  return (
    <div id="achievements" className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>MY ACHIEVEMENTS</h2>
        <ul className={styles.list}>
          {achievements.map((achievement, index) => (
            <li key={index}>{`${index + 1}. ${achievement}`}</li>
          ))}
        </ul>

        {/* Add Achievements Button Here */}
        <a 
          href="https://drive.google.com/drive/folders/1A0nJLLtbwmX-3EhwsJaDvuQndOEBfc6G" 
          className={styles.button} 
          target="_blank"
        >
          Certificates of Achievements
        </a>
      </div>

      {/* Right Side - Diamond Image Frames */}
      <div className={styles.imageContainer}>
        <div className={styles.diamondFrame}>
          <img src={sih} alt="Smart India Hackathon" className={styles.image} />
        </div>
        <div className={styles.diamondFrame}>
          <img src={bglr} alt="Bangalore Event" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
