import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/nav-bar'
import ChartsContainer from '../components/charts-container'

const Charts = () => {
  return (
    <motion.div className='w-5/6 mx-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <NavBar/>
        <h1 className='text-[3.2em] leading-[1.1] mt-15'>Charts</h1>
        <ChartsContainer/>
    </motion.div>
  )
}

export default Charts