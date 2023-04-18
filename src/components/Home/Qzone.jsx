import React from 'react';
import zone1 from '../../assets/qZone1.png'
import zone2 from '../../assets/qZone2.png'
import zone3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='text-center p-2 bg-secondary bg-opacity-50'>
            <h5 className='my-3'>Q zone</h5>
            <div>
                <img src={zone1} alt="" className="img-fluid" />
            </div>
            <div>
                <img src={zone2} alt="" className="img-fluid" />
            </div>
            <div>
                <img src={zone3} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default Qzone;