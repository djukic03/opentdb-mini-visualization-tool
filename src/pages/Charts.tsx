import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/nav-bar'
import ChartsLayout from '../components/charts-layout'

const Charts = () => {
  return (
    <motion.div className='w-9/10 mx-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        <NavBar/>

        <div className='text center my-15'>
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-base-content to-primary bg-clip-text text-transparent">Charts</h1>
            <p className='text-gray-400 text-lg'>Visualize the OpenTDB questions data</p>
        </div>

        <ChartsLayout/>
    </motion.div>
  )
}

export default Charts