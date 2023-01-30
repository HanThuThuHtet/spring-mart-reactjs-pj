import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom'
import { getData } from '../api';
import { useStateContext } from '../context/StateContext';

const ProductDetail = () => {
    const {id} = useParams();
    const [product , setProduct] = useState({});
    const [productCat , setProductCat] = useState([]);

    const {dispatch} = useStateContext();


    const getProductDetail = async() => {
        setProduct(await getData(`/products/${id}`));
    }

    const getProductByCategory = async() => {
        setProductCat(await getData(`/products/category/${product.category}`));
    }


    useEffect(() => {
        getProductDetail();
        getProductByCategory();
    },[product]);

  return (
    <div className="">


        <div className='flex gap-10 items-start  my-12'>

            <img src={product?.image} className="h-96  shadow-lg p-10" alt="" />

            <div className="flex flex-col gap-5 mt-2">
                <p className='bg-info text-white mx-auto ml-0 px-5 py-1 text-sm font-bold rounded-full'>{product?.category}</p>
                <h3 className='text-2xl font-semibold text-header'>{product?.title}</h3>
                <div className="">
                    <h5 className='text-header font-semibold text-lg'>Description</h5>
                    <p className='text-gray-500 tracking-wide mt-1'>{product?.description}</p>
                </div>

                <p className='flex items-center gap-1'><AiFillStar className=' text-info ' /> <small className='text-danger font-semibold'>({product?.rating?.rate})</small> </p>
                <p className='text-header font-bold text-xl my-3'>${product?.price}</p>

                <div className="">
                    <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className='bg-secondary text-white px-5 py-2 rounded shadow-lg transform transition hover:scale-95 w-40'>Add to card</button>
                    <button className='border-2 border-secondary text-secondary px-4 py-1.5 rounded shadow-lg transform transition hover:scale-95 w-40 ml-4'>Buy Now</button>
                </div>
    
            </div>
        </div>

        <div className=" my-20">
            <h1 className='text-2xl font-semibold text-header mb-5'>You may also like</h1>
            <div className='flex flex-wrap gap-10'>
                {/* {productCat?.map(item => <h1 key={item.id}>{item.title}</h1>)} */}
                {/* {productCat?.map(item => <h1 key={item.id}>{item.title}</h1>)} */}

                {productCat?.map(item => 
                    <Link to={`/detail/${item.id}`}>
                        <div key={item.id} className='w-72 shadow-lg p-5 rounded-lg hover:shadow-xl transform transition hover:scale-105'>
                            <img src={item?.image} className="h-[150px] mx-auto   my-5" alt="" />
                            <h3 className='text-header text-md font-bold tracking-wide my-3'>{item?.title?.substring(0,25)}...</h3>
                            <div className='flex items-center gap-1'>
                                <AiFillStar className='text-info' />
                                <small className='text-danger font-semibold'>({item?.rating?.rate})</small>
                            </div>
                            <p className='text-header font-bold text-lg my-3'>${item?.price}</p>

                        </div>
                    </Link>
                )}

            </div>
        </div>

    </div>
  )
}

export default ProductDetail