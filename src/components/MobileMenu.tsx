"use client" 

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "@/components/ui/button"

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const togggleMobileMenu = () => {
       setIsMobileMenuOpen(!isMobileMenuOpen);
   }

  return (
    <div className='md:hidden lg:hidden'>
            <Button onClick={togggleMobileMenu}> 
                 {
                   isMobileMenuOpen? ( <AiOutlineClose className='size-24'/> ) : ( <AiOutlineMenu size={24}/>)
                 }
            </Button>

           </div>
  )
}

export default MobileMenu