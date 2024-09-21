import React, { useEffect, useState } from 'react'
import './Productdetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Productdetails = () => {
    const {id}=useParams()
    const [product,setProduct]=useState([])

    useEffect(()=>{
        const feachproducts=async()=>{
            try {
                const responce=await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(responce.data)
            } catch (error) {
                console.log(error)
            }
        }
        feachproducts()
    },[id])

    return (
        <>
            <div className="product-details-container">
            <img className="product-image" src={product.image} alt={product.title} />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="back-button" onClick={() => window.history.back()}>Back to Products</button>
        </div>
        </>
    )
}
