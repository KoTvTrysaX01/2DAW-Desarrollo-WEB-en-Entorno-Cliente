import React from 'react';

export default function ProductList({ products, onAdd }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted mt-3">No hay productos
      disponibles.</p>;
  }
  return (
    <div className="container mt-4 p-2 bg-dark">
      <h2 className="mb-3 text-light text-center">La Biblioteca</h2>
      <table className="table table-striped table-bordered align-middle text-center">
        <thead className="table-warning">
          <tr>
            <th>Código</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Precio (€)</th>
            <th>Disponible</th>
            <th>Añadir</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              {/* Código */}
              <td>{p.id}</td>
              {/* Imagen */}
              <td>
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="product-img img-thumbnail"
                  style={{ width: "80px" }}
                />
              </td>
              {/* Nombre */}
              <td>{p.nombre}</td>
              {/* Autor */}
              <td>{p.autor}</td>
              {/* Precio */}
              <td>{p.precio.toFixed(2)}</td>
              {/* Disponible */}
              <td>
                <span className={`badge ${p.enStock ? 'bg-success' : 'bg-danger'}`}>
                  {p.enStock ? 'Sí' : 'No'}
                </span>
              </td>
              {/* Botón Añadir */}
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  disabled={!p.enStock}
                  onClick={() => onAdd?.(p)}
                >
                  Añadir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
