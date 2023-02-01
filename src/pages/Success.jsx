import React from 'react'
import { useNavigate } from 'react-router-dom'
import Successimg from '../components/Successimg'

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
        <div className='bg-primary p-20 rounded-lg shadow-xl  mt-10 animate__animated animate__backInDown'>
            <h1 className='text-4xl text-danger font-semibold tracking-wide my-5'>Thanks for Purchasing!!</h1>
            {/* <Successimg /> */}
            <button onClick={() => navigate('/')} className='bg-info text-primary px-5 py-2 rounded shadow-lg transform transition hover:scale-95 w-40 '>Back to Shop</button>
    </div>
    </div>
    
  )
}

export default Success