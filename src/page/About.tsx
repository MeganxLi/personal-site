/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react'

import i18next from 'i18next'
import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

import AboutLink from '../components/AboutLink'

const beadSize = '80px'

const About = () => {
  const { t } = i18next
  const eyeLeftRef = useRef<HTMLDivElement>(null)
  const eyeRightRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef<number>(0)

  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 })
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event:MouseEvent) => {
      // 檢查 ref 是否已載入
      if (!eyeLeftRef.current || !eyeRightRef.current) return

      // 定義瞳孔可以移動的最大半徑
      const MAX_PUPIL_MOVE = 15

      // --- 計算左眼瞳孔的位置 ---
      const leftEyeRect = eyeLeftRef.current.getBoundingClientRect()
      const leftCenterX = leftEyeRect.left + leftEyeRect.width / 2
      const leftCenterY = leftEyeRect.top + leftEyeRect.height / 2
      const leftDx = event.clientX - leftCenterX
      const leftDy = event.clientY - leftCenterY
      const leftDist = Math.sqrt(leftDx * leftDx + leftDy * leftDy)

      if (leftDist > MAX_PUPIL_MOVE) {
        const ratio = MAX_PUPIL_MOVE / leftDist
        setLeftPupilPos({ x: leftDx * ratio, y: leftDy * ratio })
      } else {
        setLeftPupilPos({ x: leftDx, y: leftDy })
      }

      // --- 計算右眼瞳孔的位置 ---
      const rightEyeRect = eyeRightRef.current.getBoundingClientRect()
      const rightCenterX = rightEyeRect.left + rightEyeRect.width / 2
      const rightCenterY = rightEyeRect.top + rightEyeRect.height / 2
      const rightDx = event.clientX - rightCenterX
      const rightDy = event.clientY - rightCenterY
      const rightDist = Math.sqrt(rightDx * rightDx + rightDy * rightDy)

      if (rightDist > MAX_PUPIL_MOVE) {
        const ratio = MAX_PUPIL_MOVE / rightDist
        setRightPupilPos({ x: rightDx * ratio, y: rightDy * ratio })
      } else {
        setRightPupilPos({ x: rightDx, y: rightDy })
      }
    }

    const handleScroll = () => {
      // 取得滾動距離
      const currentScrollY = window.scrollY
      const scrollThreshold = 100 // 設定滾動超過 Y px時觸發

      const isScrollingDown = currentScrollY > lastScrollY.current
      const isScrollingUp = currentScrollY < lastScrollY.current

      lastScrollY.current = currentScrollY

      // 判斷是否達到閾值
      if (isScrollingDown && currentScrollY >= scrollThreshold) {
        setIsVisible(true)
      } else if (isScrollingUp && currentScrollY < scrollThreshold) {
        setIsVisible(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="About" className="appear">
      <div
        className="about-img"
      >
        <motion.div
          className="home-card"
          style={
            isVisible
              ? { position: 'relative', top: 0, left: 0 } // About grid 位置
              : { position: 'fixed', top: '50%', left: '50%' } // Home 中心
          }
          animate={isVisible ? { x: -0, y: -0, rotate: -7 } : { x: '-50%', y: '-50%', rotate: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}

        >
          <div
            className="card-face"
          >
            <motion.div
              className="card-img"
              animate={{ opacity: isVisible ? 1 : 0 }}
            />
            <motion.div
              className="card-eye"
              animate={{ opacity: isVisible ? 0 : 1 }}
            >
              <span
                className="card-eye-beads"
                ref={eyeLeftRef}
                style={{
                  width: beadSize,
                  height: beadSize,
                  transform: `translate(-50%, -50%) translate(${leftPupilPos.x}px, ${leftPupilPos.y}px)`,
                }}
              />
            </motion.div>
            <motion.div
              className="card-eye"
              animate={{ opacity: isVisible ? 0 : 1 }}
            >
              <span
                className="card-eye-beads"
                ref={eyeRightRef}
                style={{
                  width: beadSize,
                  height: beadSize,
                  transform: `translate(-50%, -50%) translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)`,
                }}
              />
            </motion.div>
          </div>
          <h3 className="card-title">#Megan Lee</h3>
          <h5 className="card-subtitle">{t('Home.subtitle')}</h5>
          {isVisible
            ? <a className="a-link card-mail" href="mailto:ant19950601@gmail.com">ant19950601@gmail.com</a>
            : (
              <a className="a-link card-scroll bounce" href="#About">
                <ChevronDown />
                Scroll Down
              </a>
            )}
        </motion.div>
      </div>
      <div className="about-content">
        <h3 className="about-title" style={{ whiteSpace: 'pre-line' }}>
          {t('About.title')}
        </h3>
        <p className="about-text">
          {t('About.text')}
        </p>
        <AboutLink />
      </div>
    </div>
  )
}

export default About
