import React from 'react';
import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';

const Right = () => {
    return (
        <div>
            <h4 className='fw-bolder'>Log in with</h4>
            <div>
                <button type="button" className="btn btn-outline-primary w-100 mb-3"><FaGoogle /> login with Google</button>
                <button type="button" className="btn btn-outline-secondary w-100"><FaGithub /> login with Github</button>
            </div>
            <h5 className='my-3 '>Find us on</h5>
            <div className='mb-2'>
                <ul className="list-group">
                    <li className="list-group-item"><FaFacebook className='text-primary'></FaFacebook> Facebook</li>
                    <li className="list-group-item"><FaTwitter className='text-primary'></FaTwitter> Twitter</li>
                    <li className="list-group-item"><FaInstagram className='text-danger'></FaInstagram> Instagram</li>
                </ul>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default Right;