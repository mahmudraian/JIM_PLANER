import React from 'react';
import '../Button/Button.css';

const Button = (props) => {
const {handleclick}=props
       
 


    return (
        <div>
            <h1 className='btn-head'> Add Drinks Time:</h1>
            <div  className='btn-group'>
            <button onClick={()=>handleclick(10)} className='btn-time'>10</button>
            <button onClick={()=>handleclick(20)} className='btn-time'>20</button>
            <button onClick={()=>handleclick(30)} className='btn-time'>30</button>
            <button onClick={()=>handleclick(25)} className='btn-time'>25</button>
            </div>
        </div>
    );
};

export default Button;