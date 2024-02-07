'use client';

import Link from 'next/link'
import React from 'react'
import { PiBugFill } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'issues', href: '/issues'},
    ]

    return (
    <nav className='flex space-x-6 px-5 border-b mb-5 h-14 items-center'>
    <Link href={''} className='text-xl'><PiBugFill /></Link>
    <ul className='flex space-x-6'>
        {links.map(link =>
        <Link 
        key={link.href}
        href={link.href}
        className={classNames({
            'text-zinc-50': link.href === currentPath,
            'text-zinc-500': link.href !== currentPath,
            'hover:text-zinc-300 transition-colors':true,
        })}
        >{link.label}</Link> 
        )}
        
    </ul>
    </nav>
  )
}

export default NavBar
