







import BlogsThree from '@/components/blogs/BlogsThree'
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import FooterFive from '@/components/layout/footers/FooterFive'

import FooterOne from '@/components/layout/footers/FooterOne'

import HeaderFive from '@/components/layout/headers/HeaderFive'
import React from 'react'

export const metadata = {
  title: 'Blogs || EduVerse - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with EduVerse, Knowledge has no limits.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <HeaderFive/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            

            <BlogsThree/>
           
            
            <FooterFive/>
        </div>

    </div>
  )
}

