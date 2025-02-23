


import HeaderFive from '@/components/layout/headers/HeaderFive'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import CategoriesFive from '@/components/homes/categories/CategoriesFive'
import Instructors from '@/components/common/Instructors'
import StudentsFive from '@/components/homes/students/StudentsFive'
import LearningPathFive from '@/components/common/LearningCommon'
import Pricing from '@/components/homes/pricing/Pricing'



import RecomentationFive from '@/components/homes/LearningRecomentation/RecomentationFive'
import FooterFive from '@/components/layout/footers/FooterFive'
import Preloader from '@/components/common/Preloader'

export const metadata = {
  title: '',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />
      <HeaderFive />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroFive />
        <BrandsTwo />
        <CoursesFive />
        <CategoriesFive />
        <Instructors backgroundColor={'bg-beige-1'} />
        <StudentsFive />
        <LearningPathFive />
        <Pricing />
        <GetAppFive />
        <BlogsFive />
        <RecomentationFive />
        <FooterFive />

      </div>

    </div>
  )
}
