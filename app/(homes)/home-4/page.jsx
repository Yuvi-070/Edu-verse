




import React from 'react'
import HeaderFour from '@/components/layout/headers/HeaderFour'
import HeroFour from '@/components/homes/heros/HeroFour'
import Brands from '@/components/common/Brands'

import CategoriesFour from '@/components/homes/categories/CategoriesFour'
import CoursesFour from '@/components/homes/courses/CoursesFour'
import LearningPath from '@/components/homes/LearningPath/LearningPath'
import FeaturedCourses from '@/components/homes/courses/FeaturedCourses'
import LandJob from '@/components/homes/landJob/LandJob'
import TestimonialsFour from '@/components/homes/testimonials/TestimonialsFour'
import AchievementsTwo from '@/components/homes/achievements/AchievementsTwo'
import InstractorFour from '@/components/homes/instractors/InstractorFour'
import EventsFour from '@/components/homes/events/EventsFour'
import LearningSelection from '@/components/homes/LearningSelection'
import FooterFour from '@/components/layout/footers/FooterFour'
import Preloader from '@/components/common/Preloader'
export const metadata = {
  title: 'Home-4 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}




export default function page() {
  return (
    <>
    <div className='main-content'>
    <Preloader/>
        <HeaderFour/>
    </div>
     <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroFour/>
        <Brands/>
        <CategoriesFour/>
        <CoursesFour/>
        <LearningPath/>
        <FeaturedCourses/>
        <LandJob/>
        <TestimonialsFour/>
        <AchievementsTwo/>
        <InstractorFour/>
        <EventsFour/>
        <LearningSelection/>
        <FooterFour/>

     </div>
     </>
  )
}
