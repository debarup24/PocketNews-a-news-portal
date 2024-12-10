

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import MobileMenu from './MobileMenu'




const Navbar = () => {
   
    
  return (
    <header className='py-5 text-gray-700 shadow-md  transition-colors duration-300'>
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
       <NavigationMenuLink href='/news' className='font-semibold' >News</NavigationMenuLink>
     </NavigationMenuItem>
     <NavigationMenuItem>
       <NavigationMenuTrigger className='font-semibold'>Category</NavigationMenuTrigger>
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
       <NavigationMenuLink href='/about' className='font-semibold'>About</NavigationMenuLink>
     </NavigationMenuItem>

     <NavigationMenuItem>
       <NavigationMenuLink href='/contact' className='font-semibold'>Contact</NavigationMenuLink>
     </NavigationMenuItem>


  </NavigationMenuList>
</NavigationMenu>

   </div>

     <div className='hidden md:flex lg:flex items-center'>
      <div className='flex items-center mx-1'>
        <span className='mr-2'>Dark Mode</span>
        <Switch />
        </div>
        <Button variant="default" className='bg-slate-50 hover:bg-slate-900 text-black hover:text-white px-6 ml-2'>Login</Button>
        </div>
     
       {/* hamburgermenu menus for sm : */}
          <MobileMenu/>

        </nav>
    </header>
    
  )
}

export default Navbar