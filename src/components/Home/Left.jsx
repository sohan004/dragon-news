import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cetagores')
            .then(res => res.json()).then(d => setData(d))
    }, [])

    return (
        <div>
            <h4 className='fw-bolder mb-4'>All cetagories</h4>
            {data.map(ct => <div key={+ct.id}>
                <Link to={`/cetagory/${+ct.id}`} className='text-decoration-none text-dark'><h6 className='mb-3'>{ct.name}</h6></Link>
            </div>)}
        </div>
    );
};

export default Left;