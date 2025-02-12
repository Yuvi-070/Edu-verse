

import dynamic from 'next/dynamic'

import FindCourse from '@/components/homes/FindCourse'
import LearningJourney from '@/components/common/LearningJourney'
import LearningPathSeven from '@/components/homes/LearningPath/LearningPathSeven'

import Statictis from '@/components/homes/Statistics/Statictis'

import Brands from '@/components/common/Brands'

import CategoriesSeven from '@/components/homes/categories/CategoriesSeven'
import CoursesSeven from '@/components/homes/courses/CoursesSeven'
import EventsSeven from '@/components/homes/events/EventsSeven'
import HeroSeven from '@/components/homes/heros/HeroSeven'
import InstractorSeven from '@/components/homes/instractors/InstractorSeven'
import Pricing from '@/components/common/Pricing'
import Testimonials from '@/components/homes/testimonials/Testimonials'
import FooterSeven from '@/components/layout/footers/FooterSeven'
import HeaderSeven from '@/components/layout/headers/HeaderSeven'
import React from 'react'
import Preloader from '@/components/common/Preloader'

export const metadata = {
  title: 'Home-7 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className='main-content'>
      <Preloader/>
        <HeaderSeven/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
          
            <HeroSeven/>
            <CoursesSeven/>
            <InstractorSeven/>
            <FindCourse/>
            <LearningPathSeven/>
            <LearningJourney/>
            <Testimonials backgroundComponent={'white'}/>
            <EventsSeven />
            <Pricing/>
            <Brands/>
            <Statictis/>
            <CategoriesSeven/>
            <FooterSeven/>
        </div>
    </div>
  )
}
