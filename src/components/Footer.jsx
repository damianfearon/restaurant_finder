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
            Restaurant Finder &copy; 2023, All Rights Reserved
           </div>

           {/* Logo */}
           <div>
           <h2 className='font-bold text-white'>Restaurant | Finder</h2>
           </div>
          
        </div>

        {/* List Container */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#">Home</a>
            <a href="#">Restaurants</a>
            <a href="#" class="hover:text-regal-blue">Locations</a>
            <a href="#">Contact</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-regal-blue">Careers</a>
            <a href="#" class="hover:text-regal-blue">Corporate Social Responsibility</a>
            <a href="#" class="hover:text-regal-blue">Privacy Policy</a>
          </div>
        </div>

      </div>

  
    </footer>
  )
}
