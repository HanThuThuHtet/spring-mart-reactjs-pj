import React from 'react'
import { useStateContext } from '../context/StateContext'
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
const Cart = () => {
    const {state:{cart}, dispatch} = useStateContext();
  return (
    <div className='flex flex-col gap-5'>
        {/* {cart?.map(item => <h1 key={item.id}>
            {item.title}</h1>)} */}
        {cart?.map(item => 
            <div key={item.id} className=" flex items-center shadow-lg p-4 rounded-lg ">

                <img src={item?.image} className="h-32 pr-4 " alt="" />

                <div className='flex flex-col'>
                    <h3 className='text-header text-md font-bold tracking-wide my-3'>{item?.title}</h3>
                    <p className='text-header font-bold text-lg my-3'>${item?.price}</p>
                    <p>{item.qty}</p>
                    <button onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: item})}><AiFillDelete className='text-danger text-2xl' /></button>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default Cart