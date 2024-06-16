'use client'
import React, { ChangeEvent, FormEvent, useState }  from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export default function Login() {

  const [creds, setCreds] = useState({
    username : "",
    email : "",
    password : ""
  })

  const router = useRouter();

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

  const handleLogin = async(e : FormEvent) => {
    e.preventDefault();
    if(creds.email != "" && creds.password != "" && creds.username != ""){
      try {
        const request = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URI}/user/findUser/`, {
          username : creds.username,
          email : creds.email,
          password : creds.password
        })
        if(request.status === 404){
          toast.error(request.data.message)
        }
        else{
          const authrequest = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URI}/user/authUser/`,{
            username : creds.username,
            email : creds.email,
            password : creds.password
          },{
            withCredentials : true
          })
          if(authrequest.status === 200){
            router.push("/home")
          }
          else{
            toast.error("Enter the credentials");
          }
        }
          
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            toast.error(error.response.data.message || "An error occurred");
          } else {
            toast.error("An unexpected error occurred");
          }
        }
    }
    else{
      toast.warn("Fill the fields")
    }
    }

  return (
    <>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <div className='mx-auto'>
      <form onSubmit={handleLogin}>
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
              <button type='submit' className=' bg-blue-300 px-4 py-3 rounded-lg transition-all delay-75  hover:bg-green-500'>Login</button>
            </div>

          <div>
            <span>Don&apos;t have an account?</span> <Link href='/register'><span className=' text-blue-300 underline'>Register</span></Link>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
