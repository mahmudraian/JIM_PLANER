import React from 'react';

import './Product.css'

const Product = (props) => {
    const{handleclick,equipment}=props
    const{name,picture,age,time}=equipment
    return (
        <div>
        
        <div className='mainproduct'>
            <img src={picture} alt=''></img>
            <h1>{name}</h1>
           <p>For Age:{age}</p>
           <p>Time: {time}s</p>
           <button onClick={()=>handleclick(equipment)} className='btn-click'>Add to list</button>
           
        </div>
        </div>
    );
};

export default Product;