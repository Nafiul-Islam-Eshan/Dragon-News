'use client'

import { user } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface navLinkType {
    name: string,
    url: string
}


const navLinks: navLinkType[] = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about-us' },
    { name: 'Career', url: '/career' },
]


const Navbar = ({ className }: { className?: string }) => {

    const { data: session, isPending, refetch } = useSession()
    const userInfo = session?.user

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: async () => {
                    await refetch();
                },
            },

        })
    }


    return (
        <div className={`pt-9 mx-auto flex justify-center relative items-center ${className}`}>

            <ul className="flex gap-3 ">
                {
                    navLinks.map((navLink, i) => <li key={i} className="hover:text-blue-500 transition-all duration-300">
                        <NavLink href={navLink.url}> {navLink.name} </NavLink>
                    </li>)
                }
            </ul>

            {
                isPending ? <p className="absolute right-5 flex gap-2 items-center text-xl font-semibold ">Loading <span className="animate-ping">...</span></p>
                    :
                    userInfo ? (
                        <div className="absolute right-5 flex gap-2 items-center">
                            <h2 className="text-lg font-semibold">
                                {
                                    userInfo?.name || "Guest"
                                }
                            </h2>
                            <Image src={userInfo?.image || user} alt="User Avater" height={50} width={50} className="rounded-full w-10 h-10 object-cover" />
                            <Button variant={'destructive'}
                                className='px-3' size={'lg'}
                                onClick={handleSignOut}

                            >Logout

                            </Button>
                        </div>
                    ) : (
                        <div className="absolute right-5 flex gap-2 items-center">

                            <Button render={<Link href='/login' />}
                                className='px-3' size={'lg'}>Login
                            </Button>
                        </div>
                    )
            }


        </div>
    );
};

export default Navbar;