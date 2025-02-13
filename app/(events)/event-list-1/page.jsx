


import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import EventsOne from '@/components/events/EventsOne'
import FooterFive from '@/components/layout/footers/FooterFive'
import FooterOne from '@/components/layout/footers/FooterOne'

import HeaderFive from '@/components/layout/headers/HeaderFive'
import React from 'react'
export const metadata = {
  title: 'Event-list-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <HeaderFive/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
           
            <EventsOne/>
            <FooterFive/>
        </div>

    </div>
  )
}
