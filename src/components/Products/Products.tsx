import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import './style.css'


interface Product {
  id: number;
  title: string;
  price: number;
  description:string;
  category:string;
  image:string;
  rating:object;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchProducts();
  }, []);

  return (
    <div className='container'>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;