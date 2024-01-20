import React from'react';

interface ProductProps {
    id: number;
    title: string;
    price: number;
    description:string;
    category:string;
    image:string;
    rating:object; 
  }
const Product: React.FC<ProductProps> = (props) => {
    return (
        <div className='product-container'>
            <img src={props.image} alt="picstack" />
            <div className='product-info'>
                <h4>{props.title}</h4>
                {/* <p>{props.description}</p> */}
                <p style={{textAlign:'start'}}> <strong>₹ {props.price}</strong></p>
            </div>
        </div>
    );
}

export default Product;