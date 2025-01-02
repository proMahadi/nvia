import Image from 'next/image'
import React from 'react'
import logo from "@/assets/navLogo.svg"
import { CrownIcon } from '@/components/icons'

const Navbar:React.FC = () => {
  return (
    <nav>
        <div className='px-6 pt-5 flex items-center justify-between'>
            <div>
                <Image src={logo} alt='logo'/>
            </div>
            <div>
                <button className='bg-project-primary flex items-center font-medium text-base gap-x-2.5 py-2 px-3.5 rounded-lg text-white'>
                    <CrownIcon/>
                    <span className='capitalize'>Go Premium</span>
                </button>
                <div></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar