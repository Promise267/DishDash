'use client'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'

export default function Register() {
  const [creds, setCreds] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleCredentials = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target;
    setCreds((prevValue) => {
      return{
        ...prevValue,
        [name] : value
      }
    })


  }
  return (
    <>
    <div className='mx-auto'>
      <div className='flex flex-col justify-center items-center h-screen space-y-4'>
          <div className='flex flex-row space-x-4'>
            <input type="text" 
            className=' bg-gray-100 px-3 py-4'
            name='username'
            value={creds.username}
            onChange={handleCredentials}
            />
            <input type="email" 
            className=' bg-gray-100 px-3 py-4'
            name='email'
            value={creds.email}
            onChange={handleCredentials}
            />
          </div>
          <div className='flex flex-col'>
            <input type="password" 
            className=' bg-gray-100 px-3 py-4'
            name='password'
            value={creds.password}
            onChange={handleCredentials}
            />
          </div>
          <div className=''>
            <button className='bg-blue-300 px-3 py-4 rounded-lg'>Register</button>
          </div>
      </div>
    </div>
    </>
  )
}
