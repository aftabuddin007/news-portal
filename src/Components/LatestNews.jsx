import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>News</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur  rem dolor sit fuga rerum laboriosam facilis labore, provident est nam atque sequi iste voluptas suscipit vel!</p>
 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur  rem dolor sit fuga rerum laboriosam facilis labore, provident est nam atque sequi iste voluptas suscipit vel!</p>
 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur  rem dolor sit fuga rerum laboriosam facilis labore, provident est nam atque sequi iste voluptas suscipit vel!</p>
            
            </Marquee>
        </div>
    );
};

export default LatestNews;