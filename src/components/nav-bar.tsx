import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='font-bold'>OpenTDB Data Visualization Tool</h1>
        <ul className='flex gap-10'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/questions">Questions</Link>
            </li>
            <li>
                <Link to="/charts">Charts</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar