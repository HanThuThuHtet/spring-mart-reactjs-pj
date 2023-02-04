import React from 'react'
import { useStateContext } from '../context/StateContext'
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
import {Link , useNavigate} from "react-router-dom";
import EmptyCart from './img/emptycart.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTransition } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {state:{cart}, dispatch} = useStateContext();

    const [total , setTotal] = useState(0);
    const [totalItem , setTotalItem] = useTransition("");
    const incPrice = price => {
        setTotal(total + price)
    };
    const decPrice = (price) => {
        setTotal(total - price);
    };
    
    const delPrice = (price) => {
        setTotal(total - price);
    }

    useEffect(() => {
        setTotal(cart.reduce((accumulator , currentvalue) => accumulator + currentvalue.price ,0));
        
    }, []);

    const navigate = useNavigate();
    const checkoutHandler = () => {
        dispatch({type : "CART_EMPTY"});
        navigate('/success');
    }


  return (
    <>
        {cart.length > 0 ? (
            <div className='grid grid-cols-5'>
            <div className='col-span-3  flex flex-col gap-5'>
                {/* {cart?.map(item => <h1 key={item.id}>
                    {item.title}</h1>)} */}
                {cart?.map(item => 
                    <CartItem key={item.id} item={item} incPrice={incPrice} decPrice={decPrice} delPrice={delPrice} />
                )}
            </div>

            <div className="col-span-2">
                <div className='bg-gray-50 p-10 rounded'>
                    
                    <h3>{totalItem}</h3>
                    <h1 className='text-3xl text-info font-bold'>Total Price - ${total}</h1>
                    
                        <button onClick={checkoutHandler} className='bg-secondary text-white px-10 py-2 rounded shadow-lg transform transition hover:scale-95 my-5'>Checkout</button>
                    
                </div>

                <button className='bg-danger text-white px-10 py-2 rounded shadow-lg ml-3 transform transition hover:scale-95 ' onClick={() => dispatch({type:"CART_EMPTY"})}>Cart Empty</button>
            </div>
        </div>
        ) : (
            <div className='flex justify-center'>
                <div className='bg-primary p-10 rounded-lg animate__animated animate__backInDown '>
                <h6 className='text-2xl text-danger font-semibold tracking-wide  text-center'>Your cart is empty.</h6>
                <img src={EmptyCart} alt="" className='w-96  mx-auto' />
                <button onClick={() => navigate('/')} className='bg-info text-primary pl-9 py-2 rounded shadow-lg transform transition hover:scale-95 w-40 flex mx-auto text-center '>Back to Shop</button>
            </div>
        </div>
        ) }
    </>
  )
}

export default Cart