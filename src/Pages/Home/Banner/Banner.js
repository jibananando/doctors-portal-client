import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero mt-16 mb-16" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;