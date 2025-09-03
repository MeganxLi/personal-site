type SkillsItemType = {
  title:string,
  icon:React.ReactNode,
  skills:string[]
}

type WorksItemType = {
  job_title?:string,
  title:string,
  start_year:string,
  end_year:string,
  description:string[] | { project:string, text:string[] }[]
}

type PortfolioItemType = {
  title:string,
  link:string,
  img:boolean,
  github:boolean,
  figma?:string
}
