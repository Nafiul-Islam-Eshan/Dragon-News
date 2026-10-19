import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className={`${montserrat.className}`}>

            <Navbar />

            {children}

        </div>
    );
};


export default AuthLayout;