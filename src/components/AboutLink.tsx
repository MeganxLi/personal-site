import { Github, Linkedin } from 'lucide-react'

const AboutLink = () => (
  <div className="about-link-content">
    <a
      className="a-link about-link-item"
      href="https://github.com/MeganxLi"
      target="_blank"
      rel="noreferrer"
    >
      <Github />
    </a>
    <a
      className="a-link about-link-item"
      href="https://www.linkedin.com/in/meiyi-1995/"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin />
    </a>
  </div>
)

export default AboutLink
