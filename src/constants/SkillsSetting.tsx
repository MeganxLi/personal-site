import { Blinds, Code, Palette } from 'lucide-react'

const SkillsSetting : SkillsItemType[] = [
  {
    title: 'Skills.development',
    icon: <Code />,
    skills: ['React', 'Scss', 'Typescript', 'JavaScript', 'MySql', 'Canvas', 'PHP'],
  },
  {
    title: 'Skills.uiux',
    icon: <Palette />,
    skills: ['Figma', 'Illustrator', 'Photoshop'],
  },
  {
    title: 'Skills.office',
    icon: <Blinds />,
    skills: ['Word', 'Excel', 'PowerPoint'],
  },
]

export default SkillsSetting
