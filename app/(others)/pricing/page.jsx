










import Brands from '@/components/common/Brands'

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import Pricing from '@/components/common/Pricing'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'

import React from 'react'
export const metadata = {
  title: 'Mambership plans || Educrat - Professional LMS Online Education Course NextJS Template',
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
            <Pricing/>
            <Brands/>
            <FooterOne/>
        </div>

    </div>
  )
}
