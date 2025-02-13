








import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import FooterOne from '@/components/layout/footers/FooterOne'

import HeaderFive from '@/components/layout/headers/HeaderFive'
import AuthImageMove from '@/components/others/AuthImageMove'
import LoginForm from '@/components/others/LoginForm'
import SignUpForm from '@/components/others/SignUpForm'
import Terms from '@/components/terms/Terms'
import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'
export const metadata = {
  title: 'Sign up || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <HeaderFive/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <SignIn afterSignInUrl='/'/>
            </section>
           
            
            
        </div>

    </div>
  )
}