import i18next from 'i18next'

import SkillsSetting from '../constants/SkillsSetting'

const Skills = () => {
  const { t } = i18next
  return (
    <div id="Skills" className="appear">
      <h2 className="skills-title">{t('Skills.title')}</h2>
      <div className="skills-content">

        <div className="skills-item skills-item-left" key={SkillsSetting[0].title}>
          <h4 className="skill-title">{t(`${SkillsSetting[0].title}`)}</h4>
          <ul className="skill-list">
            {SkillsSetting[0].skills.map((item) => (
              <li className="skill-text" key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skills-item skills-item-right" key={SkillsSetting[1].title}>
          <h4 className="skill-title">{t(`${SkillsSetting[1].title}`)}</h4>
          <ul className="skill-list">
            {SkillsSetting.slice(1, 3).map((item) => (
              <div key={item.title} className="skill-group">
                {item.skills.map((skill) => (
                  <li className="skill-text" key={skill}>{t(`${skill}`)}</li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
