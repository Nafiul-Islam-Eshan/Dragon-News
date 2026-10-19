import Navbar from '@/components/shared/Navbar';
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>

            <Navbar />

            {children}

        </div>
    );
};


export default AuthLayout;