import React, { useState } from 'react';
export default function Cart({ items = [] }) {
    const total = items.length;
    let suma = 0;
    items.forEach((libro) => {
                suma += libro.precio;
                });
    return (
        <div className="cart d-flex align-items-center flex-column">
            <span className="bg-warning p-2 rounded-3">
                Carrito ({total} {total === 1 ? 'libro' : 'libros'})
            </span>
            <span className=''>Precio final: {Math.round(suma * 100) / 100}</span>
        </div>
    )
};