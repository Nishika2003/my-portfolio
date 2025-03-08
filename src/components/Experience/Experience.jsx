import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// ✅ Import images manually if required or use require() dynamically
const getImagePath = (imageSrc) => require(`../../assets/${imageSrc}`);

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {/* ✅ Dynamically load image paths */}
                <img src={getImagePath(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Work History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImagePath(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

  <ul>
    {historyItem.experiences.map((experience, expId) => (
      <li key={expId}>{experience}</li>
    ))}
  </ul>

  {historyItem.certificate && (
    <div className={styles.certificateContainer}>
      <a
        href={historyItem.certificate}
        className={styles.certificateButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Certificate
      </a>
    </div>
  )}
</div>

            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};
