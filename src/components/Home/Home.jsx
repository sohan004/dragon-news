import React from 'react';
import Right from './Right';
import Left from './Left';

const Home = () => {
    return (
        <div className='container'>
            <div className="row g-2">
                <div className="col-12 col-md-3">
                    <Left></Left>
                </div>
                <div className="col-12 col-md-6">
                    <h3>middle</h3>
                </div>
                <div className="col-12 col-md-3">
                    <Right></Right>
                </div>
            </div>
            
        </div>
    );
};

export default Home;