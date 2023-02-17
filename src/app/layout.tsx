"use client";

import './globals.css'
import '@/css/prism.css'
import '@/css/tailwind.css'
import React from "react";
import {AnimatePresence} from 'framer-motion'
import {ThemeProvider} from 'next-themes'
import {ScrollObserver} from "@/components/ScrollObserver";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";

export default ({
                  children,
                }: {
  children: React.ReactNode
}) => (
  <html lang="en" className="dark">
  {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
  <head/>
  <body className="dark:bg-black dark:text-white">
  <ThemeProvider attribute="class" defaultTheme="dark">
    <AnimatePresence initial={false}>
      <ScrollObserver>
        {children}
        <div className="dark:bg-black dark:text-white pt-2">
          <SectionContainer>
            <Footer/>
          </SectionContainer>
        </div>
      </ScrollObserver>
    </AnimatePresence>
  </ThemeProvider>
  </body>
  </html>
)
