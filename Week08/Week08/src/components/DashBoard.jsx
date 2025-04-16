import React from 'react'

export default function DashBoard() {
  return (
    <div className=''>
        <ul className='flex items-center h-30 border w-full border-gray-300 justify-around'>
            <li>
                <div className='text-pink-500 font-bold text-6xl mr-170'>Dashboard</div>
            </li>
            <li>
                <div className='flex h-10 ml-100 items-center'>
                    <span className='flex bg-gray-300 rounded items-center w-80 h-15'><img className='h-15 mr-3' src="/Search.png" alt="" /><input type="text" name="search" id="search" placeholder='Search...' /></span>
                    <img className='m-3 h-10' src="/Bell 1.png" alt="" />
                    <img className='m-3 h-10' src="/Question 1.png" alt="" />
                    <img className='m-3 h-10' src="Avatar 313.png" alt="" />
                </div>
            </li>
        </ul>
    </div>
  )
}
