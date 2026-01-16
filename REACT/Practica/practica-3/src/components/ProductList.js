import React from 'react';

export default function ProductList({ products, onAdd }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted mt-3">No hay productos
      disponibles.</p>;
  }
  return (
    <div className="container mt-4 px-2 py-2 bg-primary rounded-1">
      <h2 className="mb-3 text-light text-center fw-bold">La Biblioteca</h2>
      <table className="table table-striped table-bordered align-middle text-center">
        <thead className="table-primary">
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
                <span className={`badge py-2 px-3 ${p.enStock ? 'bg-success' : 'bg-danger'}`}>
                  {p.enStock ? 'Sí' : 'No'}
                </span>
              </td>
              {/* Botón Añadir */}
              <td>
                <button
                  className="btn btn-info btn-sm text-light"
                  disabled={!p.enStock}
                  onClick={() => onAdd?.(p)}>
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
