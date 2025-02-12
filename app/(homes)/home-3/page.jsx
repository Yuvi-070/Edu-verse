


import React from 'react'
import HeaderThree from '@/components/layout/headers/HeaderThree'
import HeroThree from '@/components/homes/heros/HeroThree'
import Features from '@/components/homes/features/Features'
import CategoriesThree from '@/components/homes/categories/CategoriesThree'
import CoursesSlider from '@/components/homes/courses/CoursesSlider'
import StepsOne from '@/components/common/StepsOne'

import Instructors from '@/components/common/Instructors'
import Testimonials from '@/components/common/Testimonials'
import CoursesTwo from '@/components/homes/courses/CoursesTwo'
import Achievements from '@/components/homes/achievements/Achievements'
import SkillsOne from '@/components/homes/skills/SkillsOne'
import Line from '@/components/common/Line'
import BlogsTwo from '@/components/homes/blogs/BlogsTwo'
import JoinTwo from '@/components/homes/join/JoinTwo'
import FooterTwo from '@/components/layout/footers/FooterThree'
import Preloader from '@/components/common/Preloader'
export const metadata = {
  title: 'Home-3 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <main className="main-content overflow-hidden ">
      <Preloader/>
      <HeaderThree/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroThree/>
        <Features/>
        <CategoriesThree/>
        <CoursesSlider/>
        <StepsOne/>
        <Line/>
        <Instructors/>
        <Testimonials/>
        <CoursesTwo/>
        <Achievements/>
        <SkillsOne/>
        <Line/>
        <BlogsTwo/>
        <JoinTwo/>
        <FooterTwo/>

      </div>
    </main>
  )
}
