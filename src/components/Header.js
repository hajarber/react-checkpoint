import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header =  ({color})  => {
  const navigate = useNavigate();
  return (
  <div className='flex  justify-between  py-2   md:mx-[25%]'>
     <h1 className='text-white ml-2.5 font-sans font-semibold text-xl '><i class="fa-solid fa-circle-check"></i>Pomofocus</h1>
     <div className='md:flex '>
      
     <button className={`md:w-auto text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-chart-column"></i> <span className='hidden md:inline'>Report</span> </button>
     <button className={`md:w-auto text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-gear"></i><span className='hidden md:inline'>Setting</span></button>  
     <button  onClick={() => navigate('login')} className={`md:w-auto text-white ${color} border-solid border-1 rounded w-8 h-8 mx-1`}><i className="fa-solid fa-circle-user"></i> <span className='hidden md:inline'>login</span>  </button>

     </div>
    </div>
  )
}

export default Header