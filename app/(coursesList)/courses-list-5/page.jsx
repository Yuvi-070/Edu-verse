

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CourseListFive from '@/components/courseList/CourseListFive'

import FooterOne from '@/components/layout/footers/FooterOne'

import Header from '@/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'Course Catalog | EduVerse',
  description:
    'Browse free, YouTube-backed courses across programming, design, marketing, finance, AI, and productivity.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        <Header/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            
            <CourseListFive/>
            <FooterOne/>
        </div>
    </div>
  )
}
