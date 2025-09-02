import { useEffect, useRef, useState } from 'react'

import { ChevronDown } from 'lucide-react'

const eyeSize = '128px'
const beadSize = '80px'

const Home = () => {
  // 1. 建立兩個 ref 來引用左右眼各自的容器
  const eyeLeftRef = useRef<HTMLDivElement>(null)
  const eyeRightRef = useRef<HTMLDivElement>(null)

  // 2. 使用兩個 state 分別儲存左右眼瞳孔的位置
  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 })
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 })

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

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div id="Home">
      <div className="home-card">
        <div className="card-face">
          <div
            className="card-eye"
            style={{ width: eyeSize, height: eyeSize }}
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
          </div>
          <div className="card-eye" style={{ width: eyeSize, height: eyeSize }}>
            <span
              className="card-eye-beads"
              ref={eyeRightRef}
              style={{
                width: beadSize,
                height: beadSize,
                transform: `translate(-50%, -50%) translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)`,
              }}
            />
          </div>
        </div>
        <h3 className="card-title">#Megan Lee</h3>
        <h5 className="card-subtitle">Front-end Engineer & UIUX</h5>
        <span className="card-scroll bounce ">
          <ChevronDown />
          Scroll Down
        </span>
      </div>
    </div>
  )
}

export default Home
