import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import { addToDb,getstroeddata} from '../Utility/fakedb';
import './Shop.css'

const Shop = () => {
    const [data,setData]= useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))

    },[])
    useEffect(()=>{
        const  storedCart= getstroeddata();
        // console.log('store',storedCart);
        const savecart=[];
        for (const id in storedCart){
            const addedproduct = data.find( product=> product.id ===id);
                    
                if(addedproduct){
                    
                    savecart.push(addedproduct)
                }
               
            
        }
        setCart(savecart);
    },[data])
   

    // const handleclick=(selectedproduct)=>{
    //     let newcart=[];
    //     const exist =cart.find(product=>product.id===selectedproduct.id);
    //     if(!exist){
           
    //         newcart=[...cart,selectedproduct]
    //     }
    //     else{
    //         const rest= cart.filter(product=>product.id !== selectedproduct.id);
        
    //         newcart=[...rest,exist]
    //     }
        
    //     setCart(newcart);
    //     addToDb(selectedproduct.id)
        
        
    // }
    const handleclick=(index)=>{
        let storedata=[];
        
        const adddata=data.filter(add=> add.id === index.id)
            
        storedata =[...cart,index];
        if(adddata){
        setCart(storedata)
        addToDb(index.id)
    
        }
    }

    return (
        <div>
        <Header></Header>
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
            <div className='maincart'>
        
               {/* { cart.map(carts=> <Cart carts={carts}></Cart>)} */}
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;