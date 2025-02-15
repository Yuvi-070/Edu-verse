
import BrandsTwo from '@/components/homes/brands/BrandsTwo'
import HomeHero from '@/components/homes/heros/HomeHero'
import HeaderFive from '@/components/layout/headers/HeaderFive'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import CategoriesFive from '@/components/homes/categories/CategoriesFive'
import Instructors from '@/components/common/Instructors'
import StudentsFive from '@/components/homes/students/StudentsFive'
import LearningPathFive from '@/components/common/LearningCommon'

import GetAppFive from '@/components/homes/getApp/GetAppFive'
import BlogsFive from '@/components/homes/blogs/BlogsFive'
import RecomentationFive from '@/components/homes/LearningRecomentation/RecomentationFive'
import FooterFive from '@/components/layout/footers/FooterFive'
import Preloader from '@/components/common/Preloader'

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: 'EduVerse',
  description:
    'Elevate your e-learning content with EduVerse, Knowledge has no limit.',

}

export default async function page() {

  const user = await currentUser();
  console.log("USER", user)

  return (
    <div className="main-content  ">
      <Preloader />
      <HeaderFive user={user?.firstName}/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        {/* <BrandsTwo /> */}
        <CoursesFive />
        <CategoriesFive />
        <Instructors backgroundColor={'bg-beige-1'} />
        <StudentsFive />
        <LearningPathFive />
        
        <GetAppFive />
        <BlogsFive />
        <RecomentationFive />
        <FooterFive />

      </div>

    </div>
  )
}
