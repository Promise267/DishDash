'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter();

  const checkUserLoggedIn = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URI}/user/validateUser/`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log('Logged In');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error checking user login status:', error);
        if (error.response?.status === 401) {
          router.push(error.response.data.redirect);
        } else {
          console.error('Redirect URL not found in error response.');
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  useEffect(()=>{
    checkUserLoggedIn()
  },[])
  return (
    <>
        <Navbar/>
    </>
  )
}
