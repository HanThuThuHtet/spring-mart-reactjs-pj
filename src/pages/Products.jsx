import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Spinner from '../components/Spinner/Spinner';
import { useStateContext } from '../context/StateContext'

const Products = () => {
  const {state: {products,cart}}  = useStateContext();
  console.log(cart);
  //console.log(state);
  //console.log(productLists);

   //const [products , setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(productLists);
    
  // } , [productLists]);
  //console.log(products);

  return (
    <div className='flex flex-wrap gap-10 justify-center my-10'>
      {/* {productLists?.map(product => (<h1 key={product.id}>{product.title}</h1>))} */}
      {/* {productLists?.map(product => <Card key={product.id} />)} */}
      {products.length > 0 ?  products?.map(product => <Card key={product.id} product={product} />) : <Spinner />}

      {/* {productLists?.map(product => <Card key={product.id} product={product} />)} */}
    </div>
  )
}

export default Products