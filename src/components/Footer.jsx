import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-mint'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8'
      >
        {/* Logo & Social links Container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12'
        >
          <div className='mx-auto my-6 text-center text-white'>
          LettuceDeliver &copy; 2023, All Rights Reserved.
           </div>

           {/* Logo */}
           <div>
           <h2 className='font-bold text-white'>LettuceDeliver</h2>
           </div>
          
        </div>

       {/* Social Links Container & Icons */}
       <div className="flex justify-center space-x-4">

       <a href="#">
              <img src="/img/icon-facebook.svg" alt="" className="h-8" />
            </a>
            
            {/* Twitter */}
            <a href="#">
              <img src="/img/icon-twitter.svg" alt="" className="h-8" />
            </a>
           
            {/* Instagram */}
            <a href="#">
              <img src="/img/icon-instagram.svg" alt="" className="h-8" />
            </a>

            {/* YouTube */}
            <a href="#">
              <img src="/img/icon-youtube.svg" alt="" className="h-8" />
            </a>
           </div>

          {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className='hover:text-regal-blue'>Home</a>
            <a href="#" className='hover:text-regal-blue'>Restaurants</a>
            <a href="#" className="hover:text-regal-blue">Locations</a>
            <a href="#" className='hover:text-regal-blue'>Contact</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-regal-blue">Careers</a>
            <a href="#" className="hover:text-regal-blue">Corporate Social Responsibility</a>
            <a href="#" className="hover:text-regal-blue">Green Facts</a>
            <a href="#" className="hover:text-regal-blue">Privacy Policy</a>
          </div>
        </div>
 </div>
 </footer>
  )
}
