

import HomeHero from '@/components/homes/heros/HomeHero'
import Header from '@/components/layout/headers/Header'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import CategoriesFive from '@/components/homes/categories/CategoriesFive'
import LearningPathFive from '@/components/common/LearningCommon'
import FooterOne from '@/components/layout/footers/FooterOne'
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
      <Header user={user?.firstName}/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        <CoursesFive />
        <CategoriesFive />
        <LearningPathFive />
        <FooterOne />

      </div>

    </div>
  )
}
