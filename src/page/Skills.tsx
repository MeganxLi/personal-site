import SkillsSetting from '../constants/SkillsSetting'

const Skills = () => (
  <div id="Skills">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-content">
      {SkillsSetting.map((Items) => (
        <div className="skills-Item">
          {Items.icon}
          <h4 className="skill-title" key={Items.title}>{Items.title}</h4>
          <ul className="skill-list">
            {Items.skills.map((item) => (
              <li className="skill-text" key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

export default Skills
