export const github_url = 'https://github.com/MeganxLi/'
export const github_page = 'https://meganxli.github.io/'

export const AnimationEnum = {
  expand: 'expand',
  shrink: 'shrink',
  idle: 'idle',
} as const

export const TagEnum = {
  react: 'React',
  type: 'Typescript',
  vite: 'Vite',
  linaria: 'Linaria',
  styled: 'Styled-Components',
  fabric: 'Fabric.js',
  pdf: 'React-pdf',
  tailwind: 'TailwindCSS',
  jotai: 'Jotai',
  ant: 'Ant Design',
  beautiful: 'React-beautiful-dnd',
  gsap: 'GSAP',
  redux: 'React-Redux',
  vue: 'Vue',
  i18next: 'i18next',
}

const PortfolioSetting : PortfolioItemType[] = [
  {
    title: 'Portfolio.project1.title',
    link: 'i-ching-easy',
    img: true,
    github: true,
    figma: 'https://www.figma.com/design/KX81j9dbU03YY9kCdAmNeF/%E7%B0%A1%E6%98%93%E6%98%93%E7%B6%93?node-id=0-1&m=dev&t=PG7X6StCf5Vzs4w4-1',
    tag: [TagEnum.react, TagEnum.type, TagEnum.vite],
  },
  {
    title: 'Portfolio.project2.title',
    link: 'coffee-guide',
    img: true,
    github: true,
    figma: 'https://www.figma.com/design/KF0SZWlRq5npZeA7EJVgtY/%E5%92%96%E5%95%A1%E6%B8%85%E5%96%AE-coffee-guide?node-id=2-224&m=dev&t=bJfvRdEaEIDkXGOj-1',
    tag: [TagEnum.react, TagEnum.linaria, TagEnum.type, TagEnum.vite],
  },
  {
    title: 'Portfolio.project3.title',
    link: 'character-spotlight',
    img: true,
    github: true,
    tag: [TagEnum.react, TagEnum.styled, TagEnum.i18next, TagEnum.type],
  },
  {
    title: 'Portfolio.project4.title',
    link: 'time-computer',
    img: true,
    github: true,
    figma: 'https://www.figma.com/design/rTNa1ZqefedGHjTqQY6ghc/%E6%99%82%E9%96%93%E8%A8%88%E6%99%82%E5%99%A8-Time-Computer?node-id=2-229&m=dev&t=fDPQwlcUWuHNB4v4-1',
    tag: [TagEnum.react, TagEnum.ant, TagEnum.vite],
  },
  {
    title: 'Portfolio.project5.title',
    link: 'dotted-sign',
    img: true,
    github: true,
    tag: [TagEnum.react, TagEnum.tailwind, TagEnum.jotai, TagEnum.pdf, TagEnum.fabric],
  },
  {
    title: 'Portfolio.project6.title',
    link: 'scrum-xinshou-village',
    img: true,
    github: true,
    tag: [TagEnum.react, TagEnum.type, TagEnum.beautiful],

  },
  {
    title: 'Portfolio.project7.title',
    link: 'parallax-scrolling-website',
    img: true,
    github: true,
    tag: [TagEnum.react, TagEnum.linaria, TagEnum.gsap],
  },
  {
    title: 'Portfolio.project8.title',
    link: 'thsr-departure-board',
    img: true,
    github: true,
    tag: [TagEnum.react, TagEnum.styled, TagEnum.redux],
  },
  {
    title: 'Portfolio.project9.title',
    link: 'twBankCode',
    img: true,
    github: true,
    figma: 'https://www.figma.com/design/fKzy5AUKIlKqAqkCLWddld/%E5%8F%B0%E7%81%A3%E9%8A%80%E8%A1%8C%E6%B8%85%E5%96%AE?node-id=0-1&m=dev&t=UvuG6O5vvgMg3SuC-1',
    tag: [TagEnum.vue, TagEnum.tailwind],
  },
  {
    title: 'Portfolio.project10.title',
    link: 'react-calculator',
    img: true,
    github: true,
    figma: 'https://www.figma.com/design/nLI1f51bNMDNBzm5GC5n6I/%E8%A8%88%E7%AE%97%E6%A9%9F-Calculator?node-id=0-1&m=dev&t=JGZnjult1GsmbKxN-1',
    tag: [TagEnum.vue, TagEnum.styled],
  },

]

export default PortfolioSetting
