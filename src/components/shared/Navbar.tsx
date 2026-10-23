import { user } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./NavLink";

interface navLinkType{
    name:string,
    url: string
}


const navLinks : navLinkType[] = [
    {name: 'Home', url:'/'},
    {name: 'About', url:'/about-us'},
    {name: 'Career', url:'/career'},
]


const Navbar = ({className}: {className?:string}) => {
    return (
        <div className={`pt-9 mx-auto flex justify-center relative items-center ${className}`}>
            
            <ul className="flex gap-3 ">
                {
                    navLinks.map((navLink, i) => <li key={i} className="hover:text-blue-500 transition-all duration-300">
                        <NavLink href={navLink.url}> {navLink.name} </NavLink>
                    </li>)
                }
            </ul>

            <div className="absolute right-5 flex gap-2 items-center">
                <Image src={user} alt="User Avater"/>
                <Button render={<Link href='/login' />}
                 className='px-3' size={'lg'}>Login</Button>
            </div>


        </div>
    );
};

export default Navbar;