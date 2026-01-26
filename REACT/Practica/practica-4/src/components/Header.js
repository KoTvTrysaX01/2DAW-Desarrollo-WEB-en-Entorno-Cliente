import React from 'react';
export default function Header() {
    return (
        <header className="bg-info text-light p-3 mb-4">
            <div className="container">
                <h1 className="mb-0 primary">Mundo de Libros</h1>
                <nav className="mt-2">
                    <ul className="nav">
                        <li className="nav-item h5 bg-light rounded-4 m-1">
                            <a className="nav-link text-dark" href="#">Inicio</a>
                        </li>
                        <li className="nav-item h5 bg-light rounded-4 m-1">
                            <a className="nav-link active text-dark" href="#">Biblioteca</a>
                        </li>
                        <li className="nav-item h5 bg-light rounded-4 m-1">
                            <a className="nav-link text-dark" href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}