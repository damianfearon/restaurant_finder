import React from 'react'

export default function Header({onSearchInputChange}) {
  const handleInputChange = (event) => {
    onSearchInputChange(event.target.value)
  }
  return (
    <div className='w-full bg-white'>
      {/* Navbar */}
      <nav className="  px-6">
        {/* Flex Container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className="pt-2">
            <h2 className=' whitespace-nowrap font-bold text-regal-blue'>Restaurant | Finder</h2>
          </div>

{/* Search Bar */}
<div className='max-w-md  w-full m-5'>
    <button className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-mint overflow-hidden" id='searchbar'>
        <div className="grid place-items-center h-full w-12 text-clean">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-regal-blue pr-2 bg-clean "
        type="text"
        id="search"
        placeholder=" I'm Feeling Hungry..."
        onChange={handleInputChange} 
        onSubmit= {handleInputChange}/> 

    </button>
</div>


          {/* Menu Items */}
          <div className='space-x-6'>
            <a href="#" className='hover:text-mint'>About</a>
            <a href="#" className='hover:text-mint'>Contact</a>
          </div>
          
        

</div>
      </nav>
    </div>
  )
}
