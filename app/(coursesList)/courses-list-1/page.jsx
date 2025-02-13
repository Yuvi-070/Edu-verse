

import Preloader from '@/components/common/Preloader'
import CourseListOne from '@/components/courseList/CourseListOne'
import FooterFive from '@/components/layout/footers/FooterFive'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import HeaderFive from '@/components/layout/headers/HeaderFive'
import React from 'react'


export const metadata = {
  title: 'Couese-list-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
    <Preloader/>
        <HeaderFive/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
           
            <CourseListOne/>
            <FooterFive/>
        </div>
    </div>
  )
}
