// React imports
import React from 'react'

function FormSubmission() {
  return (
    <div className="mt-56 mb-[432px] p-12 sm:mb-[512px] md:mb-[584px]">
      <div className="bg-stone-50 mx-auto min-w-fit w-2/12 p-20 drop-shadow-[10px_-10px_0_rgb(0,0,0)] border-black border rounded-xl overflow-hidden sm:p-20">
        <h1 className="mb-6 text-center text-4xl sm:text-5xl md:text-7xl">
          Thank you!
        </h1>
        <p className="text-center text-lg">
          Your message has been send. Click{' '}
          <a href="/">
            <span className="font-bold">here</span>
          </a>{' '}
          to get back to the home page or simply close this window.
        </p>
      </div>
    </div>
  )
}

export default FormSubmission
