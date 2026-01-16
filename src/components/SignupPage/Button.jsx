import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.func} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]">
        <props.icon size={18} />
        <span>{props.name}</span>
      </button>
    </div>
  )
}

export default Button