import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import DATA from "../Data"

const Product = () => {

    const Loading = () => {
        
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                   <Skeleton height={350} />
               </div>
            </>
        )
    }

    const loading = false;

    const cardItem = (item) => {

        return (
            <div className="card my-5 py-4 item" key={item.id} style={{width: '18rem'}}>
                <img src={item.img} className="card-img-top" alt={item.title} height="250px" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p classNameName="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-success">Buy Now</NavLink>
                    </div>
            </div>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row justify-content-around">
                    
                    {
                    DATA.map(cardItem)
                    }

                </div>
            </div>

        </>

    );
}

export default Product;