import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {Link} from "react-router-dom"


const Card = ({product}) => {
    //const {title , image , price , rating} = product;
  return (
    <div className='w-72 shadow-lg p-5 rounded-lg hover:shadow-xl transform transition hover:scale-105'>
        <img src={product?.image} className="h-[200px] mx-auto my-3" alt="" />
        <h3 className='text-header font-bold tracking-wide my-3'>{product?.title?.substring(0,25)}...</h3>
        <div className='flex items-center gap-1'>
            <AiFillStar className='text-info' />
            <small className='text-danger font-semibold'>({product?.rating?.rate})</small>
        </div>
        <p className='text-header font-bold text-xl my-3'>${product?.price}</p>
        <div>
            <button className='bg-secondary text-white px-5 py-2 rounded shadow-lg transform transition hover:scale-95'>Add to card</button>
            <Link to={`/detail/${product.id}`}>
              <button className='bg-header text-white px-5 py-2 rounded shadow-lg ml-3 transform transition hover:scale-95'>Details</button>
            </Link>
        </div>
    </div>
  )
}

export default Card