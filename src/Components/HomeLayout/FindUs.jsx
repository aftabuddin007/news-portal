import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold my-5  space-y-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn bg-base-100 border-base-200 justify-start join-item"><FaFacebook></FaFacebook> FaceBook</button>
  <button className="btn bg-base-100 border-base-200 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
  <button className="btn bg-base-100 border-base-200 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;