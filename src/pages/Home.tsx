import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-[3.2em] leading-[1.1]'>Welcome to the OpenTDB Mini Visualization Tool</h1>
                <Link to="/questions" className='btn btn-neutral btn-lg mt-10'>Start</Link>
            </div>
        </motion.div>
    )
}

export default Home