"use client";

import Intro from '@/components/Intro'
import MoreInfo from "@/components/MoreInfo";

import Works from "@/components/Work";
import React from "react";


const Page = () => (
  <main className="bg-white dark:bg-black">
    <Intro/>
    <MoreInfo/>
    <Works/>
  </main>
)

export default Page;
