// import React from 'react';
// export default function Header() {
//     return (
//         <header className="bg-info text-light p-3 mb-4">
//             <div className="container">
//                 <h1 className="mb-0 primary">Mundo de Libros</h1>
//                 <nav className="mt-2">
//                     <ul className="nav">
//                         <li className="nav-item h5 bg-light rounded-4 m-1">
//                             <a className="nav-link text-dark" href="#">Inicio</a>
//                         </li>
//                         <li className="nav-item h5 bg-light rounded-4 m-1">
//                             <a className="nav-link active text-dark" href="#">Biblioteca</a>
//                         </li>
//                         <li className="nav-item h5 bg-light rounded-4 m-1">
//                             <a className="nav-link text-dark" href="#">Contacto</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// }

import { NavLink } from "react-router-dom";

export default function Header() {
  const link = ({ isActive }) =>
    "nav-link" + (isActive ? " fw-bold text-decoration-underline" : "");

  return (
    <header className="bg-dark text-white p-3 mb-4">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="h4 mb-0">Tienda de Productos</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className={link}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={link}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/products" className={link}>
                Admin Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={link}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={link}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
