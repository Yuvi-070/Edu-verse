import HomeHero from '@/components/homes/heros/HomeHero'
import Header from '@/components/layout/headers/Header'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import LearningPathFive from '@/components/common/LearningCommon'
import FooterOne from '@/components/layout/footers/FooterOne'
import Preloader from '@/components/common/Preloader'
import LearnerHub from '@/components/homes/LearnerHub'

export const metadata = {
  title: 'EduVerse',
  description:
    'Elevate your e-learning content with EduVerse, Knowledge has no limit.',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        <LearnerHub />
        <CoursesFive />
        {/* <CategoriesFive /> */}
        <LearningPathFive />
        <FooterOne />

      </div>

    </div>
  )
}
