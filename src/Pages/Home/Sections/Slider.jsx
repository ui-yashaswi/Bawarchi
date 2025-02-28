import React from 'react'
import img1 from "/Home/Slides/slide1.jpeg"
import logo from "/Icons/logo.png"


function Slider() {
  return (
    <div>
        <div className='w-full h-[80vh] '>
        <img src={img1} alt="" className='w-full h-full object-cover bg-center relative' />
        <img src={logo} className=' absolute left-[40%] right-[50%] bottom-[30%] w-96' alt="" />

        </div>
    </div>
  )
}

export default Slider