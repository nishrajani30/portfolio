import {motion} from 'framer-motion'
import React, {ReactNode} from 'react'
import '@/css/globals.css'
import '@/css/prism.css'
import '@/css/tailwind.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionContainer from '../components/SectionContainer'
import {ThemeProvider} from "next-themes";
import {Analytics} from "@vercel/analytics/dist/react";

interface Props {
  children: ReactNode
}

export default function MainLayout({children}: Props) {
  const variants = {
    hidden: {opacity: 0, x: -200},
    enter: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 0},
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="bg-white dark:bg-black">
        <SectionContainer>
          <Header/>
          <div className="flex flex-col justify-between">
            <motion.main
              className="mb-auto"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{type: 'linear'}}
            >
              {children}
            </motion.main>
            <Footer/>
          </div>
        </SectionContainer>
      </main>
      <Analytics />
    </ThemeProvider>
  )
}
