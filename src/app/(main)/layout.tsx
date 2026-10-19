import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

interface MainLayoutProps{
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps ) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;