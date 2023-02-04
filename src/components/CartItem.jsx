import React, { useState } from 'react'
import { AiFillDelete, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
const CartItem = ({item, incPrice , decPrice, delPrice}) => {
    const {dispatch} = useStateContext();
    const [qty , setQty] = useState(1);
    const increaseQty = () => {
        setQty(prev => prev + 1);
        incPrice(item.price);
    };
    const decreaseQty = () => {
        if(qty > 1){
            setQty(prev => prev - 1);
            decPrice(item.price);
        }
    }
    const delItem = () => {
        dispatch({type:"REMOVE_FROM_CART", payload: item});
        delPrice(item.price * qty );
    }

    
  return (
                    <div key={item.id} className=" flex items-start shadow-lg p-4 rounded-lg w-[700px]">

                        <img src={item?.image} className="h-32 px-8 " alt="" />

                        <div className='flex flex-col'>
                            <h3 className='text-header text-md font-bold tracking-wide mt-3 my-0'>{item?.title}</h3>
                            <p className='text-header font-bold text-2xl my-3'>${item?.price * qty}</p>
                            <div className="flex gap-3">
                                <AiFillMinusSquare onClick={decreaseQty} className='text-2xl text-info cursor-pointer' />
                                <p className='text-lg'>{qty}</p>
                                <AiFillPlusSquare onClick={increaseQty} className='text-2xl  text-info cursor-pointer' />
                                <button onClick={delItem} className="pl-48 cursor-pointer"><AiFillDelete className='text-header text-2xl' /></button>
                            </div>
                            
                        </div>
                        
                    </div>
  )
}

export default CartItem