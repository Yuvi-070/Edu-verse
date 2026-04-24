
import Preloader from '@/components/common/Preloader'
import CourseDetailsOne from '@/components/courseSingle/CourseDetailsOne'
import CourseSlider from '@/components/courseSingle/CourseSlider'
import FooterOne from '@/components/layout/footers/FooterOne'

import Header from '@/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'Course | EduVerse',
  description:
    'Watch curated lessons, save courses, and learn with EduVerse — an LMS built around YouTube playback.',
}

export default function page({ params }) {
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper ">
        <CourseDetailsOne id={params.id} />
        <CourseSlider />
        <FooterOne />
      </div>
    </div>
  )
}
