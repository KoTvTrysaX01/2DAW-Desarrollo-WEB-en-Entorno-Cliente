import React from 'react';
export default function Header() {
    return (
        <header className="bg-warning text-dark p-3 mb-4">
            <div className="container">
                <h1 className="mb-0 primary">Word Of Linux</h1>
                <nav className="mt-2">
                    <ul className="nav">
                        <li className="nav-item h5">
                            <a className="nav-link text-dark" href="#">Inicio</a>
                        </li>
                        <li className="nav-item h5">
                            <a className="nav-link active text-dark" href="#">Distribuciones</a>
                        </li>
                        <li className="nav-item h5">
                            <a className="nav-link text-dark" href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}