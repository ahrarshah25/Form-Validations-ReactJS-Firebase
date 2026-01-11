import React from 'react'
import { ShieldCheck } from 'lucide-react'

const RightIcon = () => {
  return (
    <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
      
      <div className="absolute top-4 left-4 w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-blue-300 shadow-xl transform rotate-3 transition-all duration-300 hover:rotate-0"></div>
      
      <div className="relative z-10 w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-lg">
        <ShieldCheck className="text-blue-600" size={80} />
      </div>

    </div>
  )
}

export default RightIcon
