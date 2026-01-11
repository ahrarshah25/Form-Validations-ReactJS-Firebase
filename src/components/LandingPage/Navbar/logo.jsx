import React from 'react'
import { ShieldUser } from 'lucide-react'

const logo = () => {
  return (
    <div className="flex items-center gap-2 text-blue-600">
      <ShieldUser size={28} />
      <h1 className="text-xl font-semibold tracking-wide">
        Firebase <span className="text-gray-700">Authentication.</span>
      </h1>
    </div>
  )
}

export default logo
