import BreakingNewsMarquee from '@/components/shared/BreakingNewsMarquee';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

interface MainLayoutProps{
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps ) => {
    return (
        <div className='mx-3 sm:mx-6 md:mx-12 lg:mx-23 2xl:mx-36'>
            <Header />
            <BreakingNewsMarquee />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;