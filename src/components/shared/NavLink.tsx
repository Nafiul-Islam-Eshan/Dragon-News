'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


type NavLinkType = {
    href:string,
    children:React.ReactNode
}

const NavLink = ({href, children}:NavLinkType) => {

    const pathname = usePathname()
    

    const isActive = pathname===href

    return (
        <Link href={href} className={`${isActive && 'border-2 bg-linear-to-r from-blue-400 to-gray-400  text-white'} px-2 py-1 rounded-md `}>
            {children}
        </Link>
    );
};

export default NavLink;