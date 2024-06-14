'use client'
import React, { useState } from 'react'

export default function Navbar() {

  const [listOfOptions] = useState([
    "HOME",
    "FEATURES",
    "PRICING",
    "MORE"
  ])

  return (
    <>
    <div className="flex p-3 bg-gray-100">
        <div className="flex-auto w-10">
          <span className="text-3xl font-semi-bold">Cookbook</span>
        </div>
        <div className="flex-auto w-32">
            <ul className='flex justify-start items-start space-x-4'>
            {listOfOptions.map((op, index) => (
                <li className='cursor-pointer' key={index}>{op}</li>
            ))}
            </ul>
        </div>
        <div className="flex-none w-50">
          <button className="bg-green-800 py-2 px-4 rounded-3xl text-white font-semibold tracking-wide hover:bg-cyan-600 hover:scale-105 transition-all delay-75">
            GET STARTED
          </button>
        </div>

      </div>
    </>
  )
}
