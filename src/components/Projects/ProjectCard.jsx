import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, description, skills, source, demo } }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {title !== "Pocket Labs: Patent Project (Registered Company)" && ( 
          <a href={source} className={styles.link} target = "_blank">
            Source
          </a>
        )}
        {title === "Pawsome: Full-Stack Pet Adoption Platform" && demo && (
          <a href={demo} className={styles.link} target = "_blank">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
