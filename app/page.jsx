import HomeHero from '@/components/homes/heros/HomeHero'
import Header from '@/components/layout/headers/Header'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import LearningPathFive from '@/components/common/LearningCommon'
import FooterOne from '@/components/layout/footers/FooterOne'
import Preloader from '@/components/common/Preloader'

import { currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: 'EduVerse',
  description:
    'Elevate your e-learning content with EduVerse, Knowledge has no limit.',

}

export default async function page() {

  const user = await currentUser();

  return (
    <div className="main-content  ">
      <Preloader />
      <Header user={user?.firstName}/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        <CoursesFive />
        {/* <CategoriesFive /> */}
        <LearningPathFive />
        <FooterOne />

      </div>

    </div>
  )
}
