
import Preloader from '@/components/common/Preloader'

import Header from '@/components/layout/headers/Header'
import AuthImageMove from '@/components/others/AuthImageMove'
import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'
export const metadata = {
  title: '',
  description:
    '',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <SignUp afterSignInUrl='/'/>
                <AuthImageMove />
            </section>
           
            
            
        </div>

    </div>
  )
}