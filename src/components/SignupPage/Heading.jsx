import React from 'react'

const Heading = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        {props.heading}
      </h1>
      <p className="text-gray-500 mt-1">
        {props.para}
      </p>
    </div>
  )
}

export default Heading
