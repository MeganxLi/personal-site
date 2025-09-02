import { motion } from 'motion/react'

const HorseDrawn = () => {
  const text = 'Flexibility, Teamwork, Attention to Detail, Resilience,'
  return (
    <div id="HorseDrawn">
      <motion.div
        className="drawn-text"
        animate={{ x: '-100%' }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        <h1>
          {text.repeat(5)}
        </h1>
      </motion.div>
    </div>
  )
}

export default HorseDrawn
