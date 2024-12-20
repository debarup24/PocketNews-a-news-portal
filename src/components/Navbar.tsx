"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'
import { ThemeContext } from '@/context/themeContext'


interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}


const Navbar = () => {
    const pathname = usePathname();
    
    const {isDarkMode, toggleTheme}: any = useContext(ThemeContext)
  return (
    <header className={`py-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md transition-colors duration-300`}>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            <div className='text-xl font-bold'>
                <Link href="">Pocket <span className='font-semibold text-red-600'>News</span></Link>
            </div>
          {/* <div>
            <Button variant="default" className='bg-slate-50 hover:bg-slate-900 text-black hover:text-white px-7'>Button</Button>
           </div> */}

           <div>
 <NavigationMenu className='hidden md:flex lg:flex'>
   <NavigationMenuList className='flex space-x-8'>
     <NavigationMenuItem>
       <NavigationMenuLink href='/news' className={` ${pathname === '/news' ? 'text-red-600 font-semibold' : ''}  hover:text-gray-500 font-semibold`} >News</NavigationMenuLink>
     </NavigationMenuItem>
     <NavigationMenuItem>
       <NavigationMenuTrigger className='dark:bg-slate-900 dark:text-red-400 font-semibold'>Category</NavigationMenuTrigger>
       <NavigationMenuContent>
         <NavigationMenuLink>
          <ul className='text-gray-600 shadow-md py-5 px-5 space-y-2'>
            <li>
            <NavigationMenuLink href='/national-news' >National News</NavigationMenuLink>
            </li>

            <li>
            <NavigationMenuLink href='/international-news' >International News</NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuLink>
       
      </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <NavigationMenuLink href='/about' className={` ${pathname === '/about' ? 'text-red-600 font-semibold' : ''} font-semibold hover:text-gray-500`}>About</NavigationMenuLink>
     </NavigationMenuItem>

     <NavigationMenuItem>
       <NavigationMenuLink href='/contact' className={` ${pathname === '/contact' ? 'text-red-600 font-semibold' : ''} hover:text-gray-500 font-semibold`}>Contact</NavigationMenuLink>
     </NavigationMenuItem>


  </NavigationMenuList>
</NavigationMenu>

   </div>

     <div className='hidden md:flex lg:flex items-center'>
      <div onClick={toggleTheme}
      className='flex items-center mx-1'>
        <span className='mr-2'>Dark Mode</span>
        <Switch />
        </div>
        <Button variant="default" className=' px-6 ml-2 shadow-md shadow-red-500'>Login</Button>
        </div>
     
       {/* hamburgermenu menus for sm : */}
          <MobileMenu/>

        </nav>
    </header>
    
  )
}

export default Navbar