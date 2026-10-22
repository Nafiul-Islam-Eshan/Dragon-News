import Loader from '@/components/shared/GlobalLoader';

const GlobalLoader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Loader />
        </div>
    );
};

export default GlobalLoader;