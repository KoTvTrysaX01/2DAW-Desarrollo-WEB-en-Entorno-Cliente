import React from "react";
export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-muted mt-3">
        No hay productos disponibles.
      </p>
    );
  }
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Listado de Productos Informáticos</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio (€)</th>
            <th>Disponible</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio.toFixed(2)}</td>
              <td>
                <span
                  className={`badge ${p.enStock ? "bg-success" : "bg-danger"}`}
                >
                  {p.enStock ? "Sí" : "No"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
