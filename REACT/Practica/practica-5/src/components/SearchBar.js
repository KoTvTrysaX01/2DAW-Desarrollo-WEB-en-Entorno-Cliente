import React from 'react';
import { useRef } from 'react';
export default function SearchBar({
    query,
    onChange,
    onClear,
    placeholder = 'Buscar libros por código, nombre, autor o precio',
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
                        <button className="btn btn-info text-light fw-bold border border-1 border-info" id="search-label" onClick={enfocar}>🔎Buscar</button>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInput}
                            className="form-control border border-info"
                            placeholder={placeholder}
                            aria-label="Barra de búsqueda de libros"
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
                    <small className="text-dark d-block mt-1">
                        Filtra en tiempo real por Codigo / Nombre / Autor / Precio. Ejemplos: <code>“nb-001”</code>, <code>“Crimen y castigo”</code>, <code>“Harlan Ellison”</code>, <code>“20.85”</code>.
                    </small>
                </div>
            </div>
        </div>
    );
}
