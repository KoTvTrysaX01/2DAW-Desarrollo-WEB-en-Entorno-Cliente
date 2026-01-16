import React, { useState } from 'react';
export default function Cart({ items = [] }) {
    const total = items.length;
    let suma = 0;
    items.forEach((libro) => {
                suma += libro.precio;
                });
    return (
        <div className="cart container d-flex justify-content-around align-items-center">
            <span className="border border-2 border-info  text-dark p-2 rounded-3 ">
                Carrito ({total} {total === 1 ? 'libro' : 'libros'})
            </span>
            <div className='bg-info border border-2 border-info text-light p-2 rounded-3 text-center'>
                <span className='fw-bold'>Precio final: {Math.round(suma * 100) / 100} €</span>
            </div>
            
        </div>
    )
};