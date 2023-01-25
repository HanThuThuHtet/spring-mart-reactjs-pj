import React from 'react'
import { useStateContext } from '../context/StateContext'

const Products = () => {
  const {state: {productLists}}  = useStateContext();
  //console.log(state);
  //console.log(productLists);
  return (
    <div>
      {productLists?.map(product => (<h1 key={product.id}>{product.title}</h1>))}
    </div>
  )
}

export default Products