import React from 'react'

const Href = (props) => {
  return (
    <div className="text-center text-sm text-gray-600">
      {props.msg}{' '}
      <a
        href={props.href}
        className="text-blue-600 font-medium hover:underline"
      >
        {props.name}
      </a>
    </div>
  )
}

export default Href
