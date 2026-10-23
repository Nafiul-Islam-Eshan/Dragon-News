import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className={`${montserrat.className} bg-gray-100 min-h-screen`}>

            <Navbar className='bg-gray-100' />

            {children}

        </div>
    );
};


export default AuthLayout;