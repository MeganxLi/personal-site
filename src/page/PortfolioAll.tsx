import { useState } from 'react'

import i18next from 'i18next'
import { Figma, Github, SlidersHorizontal } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import Footer from '../components/Footer'
import PortfolioSetting, { github_page, github_url } from '../constants/PortfolioSetting'
import { smartLink } from '../until/smartLink'

const PortfolioAll = () => {
  const { t } = i18next

  const [portfolioList, setPortfolioList] = useState(PortfolioSetting)

  const filterPortfolio = (ui:boolean) => {
    if (ui){
      setPortfolioList(PortfolioSetting.filter((item) => item.figma))
    } else {
      setPortfolioList(PortfolioSetting)
    }
  }

  return (
    <>
      <div id="PortfolioAll" className="appear">
        <div className="portfolio-up">
          <div className="portfolio-title">
            <h2>{t('Portfolio.title')}</h2>
            <a href="/" className="portfolio-title-home">Home</a>
          </div>
          <div className="portfolio-button">
            <SlidersHorizontal size={16} />
            <button type="button" className="button-text" onClick={() => filterPortfolio(false)}> All Web </button>
            <button type="button" className="button-text" onClick={() => filterPortfolio(true)}>UIUX</button>
          </div>
        </div>
        <div className="portfolio-list">
          <AnimatePresence mode="wait">
            {portfolioList.map((item) => (
              <motion.a
                className="portfolio-item"
                key={item.link}
                href={github_page + item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <div className="portfolio-img" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/${item.link}.png')` }} />
                <p className="portfolio-item-title">
                  {`# ${t(item.title)}`}
                </p>
                <div className="portfolio-item-link">
                  {item.github && (
                  <span
                    onClick={() => smartLink(github_url + item.link)}
                  >
                    <Github strokeWidth={1.5} />
                  </span>
                  )}
                  {item.figma && (
                  <span
                    onClick={() => smartLink(item.figma!)}
                  >
                    <Figma strokeWidth={1.5} />
                  </span>
                  )}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer homeLink="/" />
    </>
  )
}

export default PortfolioAll
