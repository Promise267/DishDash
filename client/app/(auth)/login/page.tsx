'use client'
import React, { ChangeEvent, useState }  from 'react'
import Link from 'next/link'

export default function Login() {

  const [creds, setCreds] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleCredentials = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target
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
        <div className=' flex flex-col justify-center items-center h-screen space-y-3'>
          <div className=' flex flex-row space-x-5'>
            <input 
              type="text"
              className=' bg-gray-100 py-3 px-4' 
              placeholder='Username'
              name='username'
              value={creds.username}
              onChange={handleCredentials}
            />
            <input 
              type="text"
              className='bg-gray-100 py-3 px-4'
              placeholder='Email'
              name='email'
              value={creds.email}
              onChange={handleCredentials}
            />
          </div>
          <div className='flex flex-col'>
            <input 
              type="password"
              className='bg-gray-100 py-3 px-4'
              placeholder='Password'
              name='password'
              value={creds.password}
              onChange={handleCredentials}
            />
          </div>
          <div>
            <button className=' bg-blue-300 px-4 py-3 rounded-lg transition-all delay-75  hover:bg-green-500'>Login</button>
          </div>
          <div>
            <span>Don&apos;t have an account?</span> <Link href='/register'><span className=' text-blue-300 underline'>Register</span></Link>
          </div>
        </div>
    </div>
    </>
  )
}
