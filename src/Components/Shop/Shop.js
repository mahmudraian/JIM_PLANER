import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [data,setData]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))

    },[])

    const handleclick=(index)=>{

        console.log(index)
    }

    return (
        <div className='shop'>
            <div className='products'>
                {
                    data.map(equipment=><Product 
                        key={equipment.index}
                         equipment={equipment}
                         handleclick={handleclick}
                         ></Product>)
                }
            </div>
            <div>
          <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Shop;