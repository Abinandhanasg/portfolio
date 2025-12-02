import React from "react";
import "./skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Technical Skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Java",
        "C",
        "Git & GitHub",
        "Postman",
      ],
    },
    {
      category: "Designing Skills",
      items: [
        "UI/UX Design",
        "Figma",
        "Canva",
        "Typography",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Teamwork",
        "Leadership",
        "Problem Solving",
        "Time Management",
        "Creativity",
        "Adaptability",
      ],
    },
  ];

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-grid">
        {skills.map((section, index) => (
          <div key={index} className="skill-card">
            <h3>{section.category}</h3>

            <div className="badge-container">
              {section.items.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
