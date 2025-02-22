







import Preloader from '@/components/common/Preloader'
import Header from '@/components/layout/headers/Header'
import AuthImageMove from '@/components/others/AuthImageMove'
import LoginForm from '@/components/others/LoginForm'
import SignUpForm from '@/components/others/SignUpForm'

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

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <SignUpForm/>
            </section>
           
            
            
        </div>

    </div>
  )
}
