




import Descriptions from '@/components/aboutCourses/lesson/Descriptions'
import LessonItems from '@/components/aboutCourses/lesson/LessonItems'
import Reviews from '@/components/aboutCourses/lesson/Reviews'
import Video from '@/components/aboutCourses/lesson/Video'
import VideoTwo from '@/components/aboutCourses/lesson/VideoTwo'
import Preloader from '@/components/common/Preloader'
import HeaderTen from '@/components/layout/headers/HeaderTen'
import React from 'react'

export const metadata = {
  title: 'Lesson-single-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}


export default function page() {
  return (
    <div  className="main-content  " >
      <Preloader/>
        <HeaderTen/>
        <div  className="content-wrapper  js-content-wrapper overflow-hidden">
            
            <section  className="layout-pt-lg layout-pb-lg lg:pt-40 lg:order-1">
        <div  className="container">
          <div  className="row justify-start marginCustom ">
            <div  className="col-xxl-8 col-xl-7 col-lg-8">
              <VideoTwo/>

              <Descriptions/>
              <Reviews/>


                </div>
                </div>
                </div>
                </section>
                <LessonItems rightPosition={true} />
        </div>
    </div>
  )
}
