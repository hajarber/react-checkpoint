import React from 'react'

const Header =  ({color})  => {
  return (
  <div className='flex  justify-between  py-2  lg:w-[550px] lg:mx-[25%] lg:ml-[370px]'>
     <h1 className='text-white ml-2.5 font-sans font-semibold text-xl '><i class="fa-solid fa-circle-check"></i>Pomofocus</h1>
     <div className='md:flex '>
      
     <button className={`md:w-20  text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-chart-column"></i> <span className='hidden md:inline'>Report</span> </button>
     <button className={` md:w-20  text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-gear"></i><span className='hidden md:inline'>Setting</span></button>  
     <button className={` md:w-20  text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-circle-user"></i> <span className='hidden md:inline'>Login</span></button>

     </div>
    </div>
  )
}

export default Header