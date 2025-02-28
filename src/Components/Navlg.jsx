import React from 'react'
import { GoSearch } from "react-icons/go";
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";



function Navlg() {
  return (
    <div className='flex absolute top-0 left-0  z-20 w-full bg-[#3D3D3D] text-[18px] font-bold text-white justify-between items-center px-28 h-28 '>

        <div className='flex w-full gap-8'>

            <h1>Menu</h1>
            <h1>Book Table</h1>
            <h1>Gallery</h1>

        </div>

        <div className='text-white flex  items-center gap-8 '>
            <h1 className='text-nowrap'>Order Now</h1>
            <div  className='text-nowrap flex items-center gap-3'>
            <h1>Sign up  </h1>
            <MdOutlinePermIdentity className='text-[25px]' />
            </div>
            <GoSearch className='text-[25px]' />
            <MdOutlineShoppingBag className='text-[25px]' />

        </div>
        

    </div>
  )
}

export default Navlg