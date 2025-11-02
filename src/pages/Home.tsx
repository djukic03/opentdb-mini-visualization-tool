import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-[3.2em] leading-[1.1]'>Welcome to the OpenTDB Mini Visualization Tool</h1>
            <Link to="/questions" className='btn btn-neutral btn-lg mt-10'>Start</Link>
        </div>
    )
}

export default Home