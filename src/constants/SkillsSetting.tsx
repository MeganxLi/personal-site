import { Blinds, Code, Palette } from 'lucide-react'

const SkillsSetting : SkillsItemType[] = [
  {
    title: 'Development',
    icon: <Code />,
    skills: ['React', 'Scss', 'Typescript', 'JavaScript', 'MySql', 'Canvas', 'PHP'],
  },
  {
    title: 'Design & UI/UX',
    icon: <Palette />,
    skills: ['Figma', 'Illustrator', 'Photoshop'],
  },
  {
    title: 'Office Productivity',
    icon: <Blinds />,
    skills: ['Word', 'Excel', 'PowerPoint'],
  },
]

export default SkillsSetting
