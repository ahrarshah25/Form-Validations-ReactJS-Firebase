import React from 'react'
import Heading from '../components/SignupPage/Heading'
import Form from '../components/SignupPage/Form'
import RightIcon from '../components/LandingPage/Hero/RightIcon'
import Href from '../components/SignupPage/Href'

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="flex items-center justify-center bg-blue-50 p-10">
          <RightIcon />
        </div>

        <div className="p-10 flex flex-col justify-center gap-6">
          <Heading heading="Signup" para="Create your account to continue" />
          <Form />
          <Href msg="Already Have An Account?" href="/login" name="Login" />
        </div>

      </div>
    </div>
  )
}

export default Signup
