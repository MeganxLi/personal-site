import i18next from 'i18next'

import SkillsSetting from '../constants/SkillsSetting'

const Skills = () => {
  const { t } = i18next
  return (
    <div id="Skills" className="appear">
      <h2 className="skills-title">{t('Skill.title')}</h2>
      <div className="skills-content">
        {SkillsSetting.map((Items) => (
          <div className="skills-Item" key={Items.title}>
            {Items.icon}
            <h4 className="skill-title">{t(`${Items.title}`)}</h4>
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
}

export default Skills
