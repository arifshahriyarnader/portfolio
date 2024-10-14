import {Link} from 'react-router-dom';
import React from 'react'

const Header = () => {
  return (
    <nav className='flex flex-col items-center justify-between px-5 py-5 bg-[#333] md:flex-row'>
      <div>
      <Link to="/" className="text-3xl text-white">
          <span style={{ color: '#F25836' }}>A</span>
          rif
          <span style={{ color: '#F25836' }}>S</span>
          hahriyar
          <span style={{ color: '#F25836' }}>N</span>
          ader
        </Link>
      </div>
      <ul className='flex flex-col pt-10 items-center gap-18 md:gap-20 text-[#fff] cursor-pointer font-bold md:flex-row md:pt-0'>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
  )
}

export default Header
