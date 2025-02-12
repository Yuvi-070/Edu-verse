










import Faq from '@/components/common/Faq'
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import HelpCenter from '@/components/others/HelpCenter'
import Terms from '@/components/terms/Terms'
import React from 'react'
export const metadata = {
  title: 'Help-center || Educrat - Professional LMS Online Education Course NextJS Template',
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
            <HelpCenter/>
            <Faq/>
            <FooterOne/>
        </div>

    </div>
  )
}
