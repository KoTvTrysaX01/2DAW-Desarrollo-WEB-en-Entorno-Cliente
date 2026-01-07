import React, { useContext } from 'react';
import { CatalogContext } from '../data/catalog';

export default function ProductList() {
  const { catalog } = useContext(CatalogContext);

  if (!catalog || catalog.length === 0) {
     
    return <p className="text-center text-muted mt-3">No hay distribuciones disponibles.</p>;
  }
  return (
    <div className="container h-100">
      <h2 className="mb-3">Listado de Distribuciones de Linux</h2>
      <table className="table table-striped table-bordered ">
        <thead className="table-info">
          <div className='row'>
            <div className='col text-primary text-center h2'>Imágen</div>
            <div className='col text-primary text-center h2'>Nombre</div>
            <div className='col text-primary text-center h2'>Tamaño</div>
            <div className='col text-primary text-center h2'>Fácil de Usar</div>
            <div className='col text-primary text-center h2'>ISO</div>
          </div>
        </thead>
        <tbody>
          {catalog.map((p) => (
            <div className='row border'>
              <div className='col d-flex align-items-center justify-content-center'><img className='img-fluid w-75' src={p.imagen} alt={p.nombre}></img></div>
              <div className='col d-flex align-items-center justify-content-center h3'>{p.nombre}</div>
              <div className='col d-flex align-items-center justify-content-center h3'>{p.tamano} GB</div>
              <div className='col d-flex align-items-center justify-content-center h2'><span className={`badge ${p.facilUsar ? 'bg-success' : 'bg-danger'}`}>
                 {p.facilUsar ? 'Sí' : 'No'}
                 </span></div>
              <div className='col d-flex align-items-center justify-content-center'> <button className='btn btn-primary'><span className='h3'>Descargar</span></button></div>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
}