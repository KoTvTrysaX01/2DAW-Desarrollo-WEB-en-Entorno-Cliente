import React from 'react';
import { useRef } from 'react';
export default function SearchBar({
    query,
    onChange,
    onClear,
    placeholder = 'Buscar productos por nombre, código o descripción…',
}) {
    const handleInput = (e) => onChange(e.target.value);
    const handleClear = () => onClear?.();
    const inputRef = useRef();
    const enfocar = () => {inputRef.current.focus();}; 
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="input-group">
                        <span className="input-group-text" id="search-label" onClick={enfocar}>🔎Buscar</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInput}
                            className="form-control"
                            placeholder={placeholder}
                            aria-label="Barra de búsqueda de productos"
                            aria-describedby="search-label"
                        />
                        {query && (
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleClear}
                                title="Limpiar búsqueda">Limpiar</button>
                        )}
                    </div>
                    <small className="text-muted d-block mt-1">
                        Filtra en tiempo real. Ejemplos: <code>“SSD”</code>, <code>“P1001”</code>, <code>“Lenovo”</code>.
                    </small>
                </div>
            </div>
        </div>
    );
}
