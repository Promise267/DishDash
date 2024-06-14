'use client'
import React, { ChangeEvent, FormEvent, useState, useRef } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { faImage, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'


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

  const [file, setFile] = useState<File | undefined>(undefined)
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined)


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    setFile(uploadedFile)

    if(fileUrl){
      URL.revokeObjectURL(fileUrl)
    }

    if(uploadedFile){
      const url = URL.createObjectURL(uploadedFile)
      setFileUrl(url)
    }
    else{
      setFileUrl(undefined)
    }

  }

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.click();
    }
  };

  const handleRemoveImage = () => {
    setFile(undefined)
    setFileUrl(undefined)
  }

  const handleRegister = async(e: FormEvent) => {
    e.preventDefault();
    if(creds.email != "" && creds.password != "" && creds.username != "" && file != undefined){
      console.log(file);
      
    }
  }


  return (
    <>
      <div className='mx-auto'>
        <form onSubmit={handleRegister}>
          <div className='flex flex-col justify-center items-center h-screen space-y-4'>
            <div className='flex flex-row space-x-4'>
              <input 
                type="text" 
                className='bg-gray-100 px-3 py-4'
                name='username'
                value={creds.username}
                onChange={handleCredentials}
                placeholder='Username'
              />
              <input 
                type="email" 
                className='bg-gray-100 px-3 py-4'
                name='email'
                value={creds.email}
                onChange={handleCredentials}
                placeholder='Email'
              />
            </div>
            <div className='flex flex-col'>
              <input 
                type="password" 
                className='bg-gray-100 px-3 py-4'
                name='password'
                value={creds.password}
                onChange={handleCredentials}
                placeholder='Password'
              />
            </div>
            <div className='flex flex-col'>
              {file && fileUrl && (
                file.type.startsWith('image/') ? (
                  <div className='relative rounded-lg w-32 h-32'>
                    <Image
                      className='object-cover rounded-lg'
                      src={fileUrl}
                      alt={file.name}
                      priority={true}
                      fill={true}
                    />
                    <button 
                      type='button' 
                      className='absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full'
                      onClick={handleRemoveImage}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ) : (
                  <div></div>
                )
              )}
              <button 
                type='button' 
                className='cursor-pointer'
                onClick={handleButtonClick}
              > 
                <FontAwesomeIcon icon={faUpload} size='2xl' />
              </button>
              <input 
                type="file" 
                name="file"
                id="fileInput"
                className='bg-transparent border-none outline-none hidden'
                accept="image/jpeg, image/jpg, image/png, image/webp"
                onChange={handleFileUpload}
              />
            </div>
            <div>
              <span>Upload Your Image</span>
            </div>
            <div>
              <button type='submit' className='bg-blue-300 px-3 py-4 rounded-lg'>Register</button>
            </div>
            <div>
              <span>Already have an account? </span>
              <Link href='/login'>
                <span className='text-blue-300 underline'>Login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
