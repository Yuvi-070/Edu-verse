








import Preloader from '@/components/common/Preloader'


import HeaderFive from '@/components/layout/headers/HeaderFive'
import AuthImageMove from '@/components/others/AuthImageMove'
import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'
export const metadata = {
  title: 'Sign up || EduVerse - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with EduVerse, Knowledge has no limits.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <HeaderFive/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <SignUp afterSignInUrl='/'/>
            </section>
           
            
            
        </div>

    </div>
  )
}