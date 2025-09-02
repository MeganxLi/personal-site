import { useEffect, useRef, useState } from 'react'

import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

const eyeSize = '128px'
const beadSize = '80px'
const About = () => {
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
      // 假設瞳孔寬度為 20px，眼球容器為 50px
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
    <div id="About">
      <div
        className="about-img"
        style={{ position: isVisible ? 'relative' : 'absolute' }}
      >
        <motion.div
          className="home-card"
          animate={isVisible
            ? { x: '-50%', y: '-50%', rotate: -7 }
            : { x: '-50%', y: 'calc(-50% - 100vh)', rotate: 0 }}
          transition={{ type: 'spring' }}
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
              style={{ width: eyeSize, height: eyeSize }}
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
              style={{ width: eyeSize, height: eyeSize }}
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
          <h5 className="card-subtitle">Front-end Engineer & UIUX</h5>
          {isVisible
            ? <a className="card-mail" href="mailto:ant19950601@gmail.com">ant19950601@gmail.com</a>
            : (
              <a className="card-scroll bounce" href="#About">
                <ChevronDown />
                Scroll Down
              </a>
            )}
        </motion.div>
      </div>
      <div className="about-text">
        <h4>About Me</h4>
        <p>
          我是一位擁有 7年以上經驗的前端工程師，能獨立負責從
          需求討論、流程規劃到 UI/UX 設計與前端實作
          的完整開發流程。擅長打造直覺化、響應式的使用者介面，
          並與跨部門團隊合作，將業務需求轉化為實際的數位解決方案，
          同時持續改善使用體驗與效能表現。
        </p>
      </div>
    </div>
  )
}

export default About
