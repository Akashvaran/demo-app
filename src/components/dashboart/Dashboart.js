import React, { useState } from 'react'
import './Dashboart.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Dashboart = () => {
    const [product, setProduct] = useState([])

    const feachdata = async () => {
        try {
            const responce = await axios.get('https://fakestoreapi.com/products',)
            setProduct(responce.data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        feachdata()
    }, [])
   
    return (
        <>
            <div className='cart-container'>
                {product.map((product) => {
                     const name = product.title.length > 20 ? product.title.substring(0, 20) + ".." : product.title;  
                  return  (
                    <div className="product" key={product.id}>
                        <img className='product-image' src={product.image} alt='products' />
                        <h3 className='product-title'>{name}</h3>
                        <p className='product-price'>Price: ${product.price}</p>
                      <Link to={`/products/${product.id}`}> <button className='product-view'>view</button></Link> 
                    </div>
                )})}

            </div>
        </>
    )
}
