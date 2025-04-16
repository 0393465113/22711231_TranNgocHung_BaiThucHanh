import React from 'react'

export default function OverView() {
  return (
    <div>
        <div className='flex mt-5 ml-5'>
            <img className='m-1' src="/Squares four 1.png" alt="" />
            <p className='text-2xl font-bold'>OnerView</p>
        </div>
        <div>
        <div class="grid grid-cols-3 gap-4 justify-around w-full">
            <div class="bg-pink-100 rounded p-4 m-7 ">
                <div className='w-full '>
                    <p className='font-bold flex justify-between items-center w-full '>Tunrover <span><img src="Button 1509.png" alt="" /></span></p>
                    <p className='text-left font-bold text-3xl mb-3'>$92,405</p>
                    <p className='text-left'><span className='text-green-500 '>5.39%</span> period of change</p>
                </div>
            </div>
            <div class="bg-blue-100 rounded p-4 m-7 ">
                <div className='w-full'>
                    <p className='font-bold flex justify-between items-center w-full'>Profit <span><img src="Button 1529.png" alt="" /></span></p>
                    <p className='text-left font-bold text-3xl mb-3'>$32,218</p>
                    <p className='text-left'><span className='text-green-500 '>5.39%</span> period of change</p>
                </div>
            </div>
            <div class="bg-blue-100 rounded p-4 m-7 ">
                <div className='w-full'>
                    <p className='font-bold flex justify-between items-center w-full'>New customer <span><img src="Button 1530.png" alt="" /></span></p>
                    <p className='text-left font-bold text-3xl mb-3'>$298</p>
                    <p className='text-left'><span className='text-green-500 '>6.84%</span> period of change</p>
                </div>
            </div>
            
        </div>
        <div className='justify-between flex'>
            <div className='flex ml-5'>
            <img src="/File text 1.png" alt="" />
            <p className='text-left font-bold text-2xl'>Detailed report</p>

            </div>
            <div className='flex'>
            <button className='flex border border-pink-400 rounded w-25 justify-around items-center mr-10'><img src="/Download.png" alt="" /> Import</button>

            <button className='flex border border-pink-400 rounded w-25 justify-around items-center mr-10'><img src="/Move up.png" alt="" /> Export</button>
            </div>
        </div>
        </div>
    </div>
  )
}
