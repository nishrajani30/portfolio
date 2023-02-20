"use client";

import Intro from '@/components/Intro'
import MoreInfo from "@/components/MoreInfo";
import { Analytics } from '@vercel/analytics/react';
import Works from "@/components/Work";
import React from "react";


const Page = () => (
  <main className="bg-white dark:bg-black">
    <Intro/>
    <MoreInfo/>
    <Works/>
    <Analytics />
  </main>
)

export default Page;
