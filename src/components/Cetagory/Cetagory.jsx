import React from 'react';
import { useParams } from 'react-router-dom';

const Cetagory = () => {
    const pera = useParams().id
    return (
        <div>
            <h1>{pera}</h1>
        </div>
    );
};

export default Cetagory;