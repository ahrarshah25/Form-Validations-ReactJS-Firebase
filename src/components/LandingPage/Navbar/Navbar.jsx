import React, { useState } from 'react'
import Logo from './logo'
import Button from './Button'
import { auth } from '../../../firebase'
import { UserPen, UserRoundPlus } from 'lucide-react'

const Navbar = () => {

  const [buttonData, setButtonData] = useState([{
    loginBtn: {
      icon: UserPen,
      name: "Login",

      func: () => {
        window.location.href = "/login"
      }
    },
    signupBtn: {
    icon: UserRoundPlus,
    name: "Create Account",

    func: () => {
      window.location.href = "/signup"
    }
  }}])

  const loadUser = () => {
    const user = auth.currentUser;

    if (user) {
      setButtonData([{
        loginBtn: {
          icon:
        }
      }])
    }
  }

  loadUser();

  return (
    <div className="w-full bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <Button icon={UserPen} name="Login" func={() => {
            window.location.href = "/login"
          }} />
          <Button icon={UserRoundPlus} name="Create Account" func={() => {
            window.location.href = "/signup"
          }} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
