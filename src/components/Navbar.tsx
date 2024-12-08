import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'


const Navbar = () => {
  return (
    <header className='py-5 bg-blue-400 text-gray-950 shadow-md  transition-colors duration-300'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            <div className='text-xl font-bold'>
                <Link href="">Pocket News</Link>
            </div>
          {/* <div>
            <Button variant="default" className='bg-slate-50 hover:bg-slate-900 text-black hover:text-white px-7'>Button</Button>
           </div> */}

           <div>
 <NavigationMenu className='hidden lg:flex'>
   <NavigationMenuList>
     <NavigationMenuItem>
       <NavigationMenuLink href='/news' >News</NavigationMenuLink>
     </NavigationMenuItem>
     <NavigationMenuItem>
       <NavigationMenuTrigger>Category</NavigationMenuTrigger>
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
       <NavigationMenuLink href='/contact' >Contact</NavigationMenuLink>
     </NavigationMenuItem>

     <NavigationMenuItem>
       <NavigationMenuLink href='/about' >About</NavigationMenuLink>
     </NavigationMenuItem>


  </NavigationMenuList>
</NavigationMenu>

           </div>

        </nav>
    </header>
    
  )
}

export default Navbar