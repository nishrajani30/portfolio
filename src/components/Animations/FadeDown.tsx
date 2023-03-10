import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  duration: number
  delay?: number
}

const FadeRight = ({children, duration, delay}: Props) => (
  <motion.div
    initial={{opacity: 0, y: -200}}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeInOut',
      },
    }}
  >
    {children}
  </motion.div>
)

export default FadeRight;
