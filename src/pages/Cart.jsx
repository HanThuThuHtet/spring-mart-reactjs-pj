import React from 'react'
import { useStateContext } from '../context/StateContext'
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
import {Link , useNavigate} from "react-router-dom";
import EmptyCart from './img/emptycart.png';

const Cart = () => {
    const {state:{cart}, dispatch} = useStateContext();
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
                {cart?.map(item => (
                    <div key={item.id} className=" flex items-center shadow-lg p-4 rounded-lg w-[700px]">

                        <img src={item?.image} className="h-32 px-8 " alt="" />

                        <div className='flex flex-col'>
                            <h3 className='text-header text-md font-bold tracking-wide my-3'>{item?.title}</h3>
                            <p className='text-header font-bold text-lg my-3'>${item?.price}</p>
                            <p>{item.qty}</p>
                            <button onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: item})}><AiFillDelete className='text-danger text-2xl' /></button>
                        </div>
                        
                    </div>
                ))}
            </div>

            <div className="col-span-2">
                <div className='bg-gray-50 p-10 rounded'>
                    <h1 className='text-3xl text-info font-bold'>Total Price - $1000</h1>
                    
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