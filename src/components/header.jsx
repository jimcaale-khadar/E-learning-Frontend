import React,{useState} from 'react'
import { RiCloseLine,RiMenuLine } from '@remixicon/react'
import { navItems } from '../constant/data'

const Header = () => {
    const [isOpen,setIsOpen]= useState(false)
    const handleClick=() =>{
        setIsOpen(!isOpen)
    }

  return (
 <header className='w-full py-5'>
    <div className='container flex items-center justify-between border-border-b-95 pb-5 '>
    {/* logo */}
    
    <a className='flex items-center' href="#"><img src="/public/images/coding.png" width={50} height={50} alt="" /><span className='text-4xl font-bold'><span className='text-green-400'>E-</span>Learning</span></a>
    
    {/* Mobile menu */}
    <nav className={`navbar ${isOpen ?"active":""} `}>
        {/* close menu */}
        <button className='absolute top-8 right-8' onClick={handleClick}>
            <RiCloseLine size={30}/>
        </button>
        {/* list */}
        <ul className=" space-y-5 text-center">
       {navItems.map((item) => (
        <li key={item.id}>
            <a href="#" className='text-lg font-medium hover:text-orange-50 transition-colors'>{item.label}</a>
        </li>
       ))}
        </ul>
        {/* login btn */}
        <button className='primary-btn mt-12 max-w-40 w-full '>Login</button>
    </nav>
    {/* menu btn */}
    <button className='lg:hidden ' onClick={handleClick}>
   <RiMenuLine/>
    </button>

    {/* lg menu */}
    <div  className='max-lg:hidden flex items-center gap-10'>
    <ul className="flex gap-10">
       {navItems.map((item) => (
        <li key={item.id}>
            <a href="#" className='hover:text-orange-50 transition-colors
             font-medium text-lg
             '>{item.label}</a>
        </li> 
       ))}
        </ul>

         {/*  lg login btn */}
         <button className='max-lg:hidden primary-btn'>Loging</button>
    </div>
    </div>
 </header>
  )
}

export default Header
