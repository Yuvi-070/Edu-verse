




import About from '@/components/about/About'
import BecomeInstactor from '@/components/common/BecomeInstactor'
import BacomeStudent from '@/components/common/BecomeStudent'
import Brands from '@/components/common/Brands'
import PageLinks from '@/components/common/PageLinks'
import StepsOne from '@/components/common/StepsOne'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
import Testimonials from '../../../components/common/Testimonials'
import LearningJourney from '@/components/common/LearningJourney'
import LearningPathSix from '@/components/common/LearningPathSix'
import Preloader from '@/components/common/Preloader'

export const metadata = {
  title: 'About-2 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <About/>
            <StepsOne/>
            <LearningJourney/>
            <Testimonials/>

            <LearningPathSix/>

            <BecomeInstactor/>
            <BacomeStudent/>



            <Brands/>

            
            <FooterOne/>
        </div>

    </div>
  )
}

