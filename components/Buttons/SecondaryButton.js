import React from 'react'

const SecondaryButton = ({children}) => {
  return (
    <button className="rounded-full bg-transparent outline outline-white color-white px-10 py-5">
        {children}
    </button>
  )
}

export default SecondaryButton