import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavBar() {//mt-10
    return (
        <Link to='/'>
            <div className='flex justify-center text-center'>
                <FaCoins className='text-4xl text-purple-900 mx-2'/>
                <h1 className='text-xl'> Coin <span className='bg-purple text-center text-xl'> Search </span></h1>
            </div>
        </Link>
        
    )
}

export default NavBar
