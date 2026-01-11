import React from 'react'
import Logo from '../Navbar/logo'
import Button from '../Navbar/Button'
import { UserPen } from 'lucide-react'

const LeftText = () => {
  return (
    <div className="space-y-8 px-6 md:px-0">
      <div>
        <Logo />
      </div>

      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        This Is <span className="text-blue-600 font-semibold">Ahrar Shah</span>'s First Dashboard Application With Proper Signup + Login Using Firebase & ReactJS.
        <br />
        Made For Practice Of ReactJS & Firebase With Full Stack Capabilities.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 bg-blue-50 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-blue-600">ReactJS</h3>
            <p className="text-gray-600 text-sm mt-1">
              UseState, Props, Functions, Two Way Binding, Conditional Rendering, Forms & Validation.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-blue-600">Firebase</h3>
            <p className="text-gray-600 text-sm mt-1">
              Authentication, Firestore Database, Real-time Data, Form Handling & Security Rules.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-blue-600">Styling</h3>
            <p className="text-gray-600 text-sm mt-1">
              Tailwind CSS, Responsive Layouts, Hover Animations & Dynamic UI Components.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-blue-600">Other</h3>
            <p className="text-gray-600 text-sm mt-1">
              Routing, State Management, API Integration, Form Validation & Full Stack Practices.
            </p>
          </div>

        </div>
      </div>

      <div className="mt-6">
        <Button icon={UserPen} name={"Get Started"} func={()=>{
          window.location.href = "/signup"
        }} />
      </div>
    </div>
  )
}

export default LeftText
