import React, { useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import './Cart.css'

const Cart = (props) => {
    const [brktime,setBrktime]=useState([])
    const {cart}=props
        let totaltime=0;
        // totaltime=carts.time+totaltime;
        for( const product of cart){
        
            if(product){
                totaltime=product.time+ totaltime;
           
            }
            
        }
        const handleclick=(time)=>{
        let breaktime=0;
        if(time){
            breaktime= time;
            
            setBrktime(breaktime);
        }
        else{
            breaktime= 0 ;
            setBrktime(breaktime);
        }
           
    }
   
   return (
        <div className='cart'>
             {/* <p>Name:{cart.length}</p> */}
             
            <Profile></Profile>
            <Button handleclick={handleclick}></Button>
                <div>
                
            <div className='timemachine'>
            <h1>Exercis Details</h1>
                <div className='timemachine1'>
                <p >Exercise Time          {totaltime} sec</p>
                </div>
                <div className='timemachine2'> <p>Breaktime     {brktime} sec</p></div>
                <button onClick={()=>handleclick(25)} className='complete-task'>Exercise Completed!</button>
                </div>
            </div>
            </div>
    );
};

export default Cart;