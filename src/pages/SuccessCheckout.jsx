import React from 'react'
import { useNavigate } from 'react-router-dom'
import Successimg from './img/success.png'

const SuccessCheckut = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
        <div className='bg-primary p-10 rounded-lg animate__animated animate__backInDown '>
            <h6 className='text-2xl text-danger font-semibold tracking-wide  text-center'>Thanks for Purchasing!!</h6>
            <img src={Successimg} alt="" className='w-96  mx-auto' />
            <button onClick={() => navigate('/')} className='bg-info text-primary pl-9 py-2 rounded shadow-lg transform transition hover:scale-95 w-40 flex mx-auto text-center '>Back to Shop</button>
    </div>
    </div>
    
    
  )
}

export default SuccessCheckut