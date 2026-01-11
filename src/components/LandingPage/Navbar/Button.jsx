import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.func} className="flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200">
        <props.icon size={18} />
        {props.name}
      </button>
    </div>
  )
}

export default Button
