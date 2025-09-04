import { Figma, Github } from 'lucide-react'

import PortfolioSetting, { github_page, github_url } from '../constants/PortfolioSetting'

const Portfolio2 = () => (
  <div id="Portfolio" className="appear">
    <h2 className="portfolio-title">Portfolio</h2>
    <div className="portfolio-button">
      <button type="button">Web</button>
      <button type="button">UIUX</button>
    </div>
    <div className="portfolio-list">
      {PortfolioSetting.map((item, k) => (
        <a className="portfolio-item" key={k} href={github_page + item.link} target="_blank" rel="noreferrer">
          <div className="portfolio-img" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/${item.link}.png')` }} />
          <p className="portfolio-item-title">
            {`# ${item.title}`}
          </p>
          <div className="portfolio-item-link">
            {item.github && <a href={github_url + item.link} target="_blank" rel="noreferrer"><Github strokeWidth={1.5} /></a>}
            {item.figma && <a href={item.figma} target="_blank" rel="noreferrer"><Figma strokeWidth={1.5} /></a>}
          </div>
        </a>
      ))}
    </div>
  </div>
)

export default Portfolio2
