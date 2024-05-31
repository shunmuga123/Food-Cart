import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({cart}) => {
  return (
    <div className='food-header'>
        <div>Food Court</div>
        <ul className='header-links'>
            <li>
                <Link to = '/'>Home </Link>
            </li>
            <li className='show-count'>{cart.length}</li>
            <li>
                <Link to = '/cart'>View Cart </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header