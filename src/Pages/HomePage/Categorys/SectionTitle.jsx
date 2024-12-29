import React from 'react'

export default function SectionTitle( { heading, subHeading } ) {
  return (
    <>
    <div className=' mx-auto md:w-4/12 mt-36 text-center '>
        <p className=' text-yellow-600 mb-2'> --- {subHeading} ---</p>
        <h2 className=' text-3xl uppercase border-y-4 py-4 border-gray-700'>{heading}</h2>
    </div>
    </>
  )
}
