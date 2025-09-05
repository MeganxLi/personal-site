import { useEffect, useState } from 'react'

import i18next from 'i18next'
import {
  ArrowLeft, ArrowRight, ChevronRight, Figma, Github,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

import PortfolioSetting, { AnimationEnum, github_page, github_url } from '../constants/PortfolioSetting'
import { smartLink } from '../until/smartLink'

const Portfolio = () => {
  const navigate = useNavigate()
  const { t } = i18next

  const [tempIndex, setTempIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [phase, setPhase] = useState<PortfolioAnimationType>(AnimationEnum.idle)
  const [disabledButton, setDisabledButton] = useState(false)

  const clickStartAnimation = () => {
    setPhase(AnimationEnum.expand)
    setDisabledButton(true)
  }

  const prevIndex = () => {
    clickStartAnimation()

    if (carouselIndex > 0){
      setTempIndex(carouselIndex - 1)
    } else {
      setTempIndex(PortfolioSetting.length - 1)
    }
  }

  const nextIndex = () => {
    clickStartAnimation()

    if (carouselIndex < PortfolioSetting.length - 1){
      setTempIndex(carouselIndex + 1)
    } else {
      setTempIndex(0)
    }
  }

  const jumpIndex = (k:number) => {
    clickStartAnimation()
    setTempIndex(k)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextIndex()
    }, 8000)

    return () => {
      clearInterval(timer)
    }
  }, [carouselIndex])

  return (
    <div id="Portfolio">
      <div className="appear">
        <div className="portfolio-top">
          <h3 className="portfolio-title">{t('Portfolio.title')}</h3>
          <div className="portfolio-carousel-button">
            <button type="button" onClick={prevIndex} disabled={disabledButton}><ArrowLeft size={16} /></button>
            <button type="button" onClick={nextIndex} disabled={disabledButton}><ArrowRight size={16} /></button>
          </div>
          <button type="button" className="portfolio-all" onClick={() => navigate('/portfolio')}>
            View All
            <ChevronRight size={14} />
          </button>
        </div>
        <ul className="portfolio-carousel-content">
          {PortfolioSetting.map((item, k) => (
            <li
              className={`portfolio-carousel-item ${carouselIndex === k ? 'checked' : ''} ${disabledButton ? 'disable' : ''}`}
              key={item.link}
              onClick={() => jumpIndex(k)}
            />
          ))}
        </ul>
        <div className="portfolio-list">
          <div
            className="portfolio-item white"
            style={{ zIndex: phase !== AnimationEnum.idle ? 1000 : 0 }}
          >
            <div className="portfolio-item-content">
              <motion.div
                key={tempIndex}
                className="white-cover"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ width: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onAnimationComplete={() => {
                  setCarouselIndex(tempIndex)
                }}
              />
            </div>
            <div className="portfolio-item-img">
              {phase === AnimationEnum.expand && (
              <motion.div
                key="expand"
                className="white-cover"
                style={{ transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                onAnimationComplete={() => {
                  setPhase(AnimationEnum.shrink)
                  setCarouselIndex(tempIndex)
                  setDisabledButton(false)
                }}
              />
              )}

              {phase === AnimationEnum.shrink && (
              <motion.div
                style={{ transformOrigin: 'right' }}
                key="shrink"
                className="white-cover"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                onAnimationComplete={() => setPhase(AnimationEnum.idle)}
              />
              )}
            </div>
          </div>
          {PortfolioSetting.map((item, k) => (
            <a
              key={k}
              className="portfolio-item"
              href={github_page + item.link}
              target="_blank"
              style={carouselIndex === k ? { zIndex: 1, opacity: 1 } : { zIndex: 0, opacity: 0 }}
              rel="noreferrer"
            >
              <div className="portfolio-item-content">
                <h5 className="portfolio-item-title">{t(`${item.title}`)}</h5>
                <div className="portfolio-label">
                  {item.tag?.map((tag) => <p key={tag}>{`# ${tag}`}</p>)}
                </div>
                <div className="portfolio-item-link">
                  <span onClick={() => smartLink(github_url + item.link)}>
                    <Github strokeWidth={1.5} />
                  </span>
                  {item.figma && (
                  <span onClick={() => smartLink(item.figma!)}>
                    <Figma strokeWidth={1.5} />
                  </span>
                  )}
                </div>

              </div>
              <div className="portfolio-item-img">
                <img src={`${import.meta.env.BASE_URL}/${item.link}.png`} alt="" loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
