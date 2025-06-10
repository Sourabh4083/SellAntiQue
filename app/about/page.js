import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='p-4 flex gap-8'>
            <image 
                className='rounded-lg' 
                src="/2.jpg" 
                alt="Antique Name" 
                width={500} 
                height={300} 
                priority 
            />
            <div className='space-y-11'>
                <h1 className='font-extrabold text-4xl'>Antique Name</h1>
                <h2>Description:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate earum...</p>
            </div>
        </div>
    );
};

export default Page;