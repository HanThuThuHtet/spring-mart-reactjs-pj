import React from 'react'
import {SiShopify} from "react-icons/si"
import {FaSearch, FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-primary px-5 py-2 my-5 shadow-md'>
        
        <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
            <SiShopify className='text-5xl text-danger' />
            <h1 className='uppercase text-3xl tracking-wide font-bold text-info'>Spring Mart</h1>
        </div>
        </Link>

        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-secondary text-white px-2 py-2 rounded">
                <FaShoppingCart />
                <small>10</small>
            </div>
            <div className="flex items-center gap-2 border rounded px-3 py-2">
                <FaSearch />
                <input type="text" className='outline-none bg-transparent' placeholder='search here'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar