import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocalDB } from "../hooks/useLocalDB";
import SearchBar from "../components/SearchBar";

export default function Vdatos({onAdd}) {
  const { data, loading, search, remove } = useLocalDB();
  const [query, setQuery] = useState("");

  const items = query ? search(query) : data;

  if (loading) return <p className="container py-4">Cargando…</p>;

  return (
    <section className="container py-4">
      <h1 className="mb-3">Productos</h1>

      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Buscar por id, nombre o precio…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="btn btn-outline-secondary" onClick={() => setQuery("")}>
            Limpiar
          </button>
        )}
      </div>

      <div className="row g-3">
        {items.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              {p.imagen && (
                <img src={p.imagen} className="card-img-top w-100" alt={p.nombre} />
              )}
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text mb-1">
                  <strong>Precio:</strong> {p.precio.toFixed(2)} €
                </p>
                <p className="card-text">
                  <span className={`badge ${p.enStock ? "bg-success" : "bg-danger"}`}>
                    {p.enStock ? "En stock" : "Sin stock"}
                  </span>
                </p>
                <div className="d-flex gap-2">
                  <Link className="btn btn-primary btn-sm" to={`/products/${p.id}`}>
                    Ver detalle
                  </Link>
                  <button className="btn btn-success btn-sm"
                  disabled={!p.enStock}
                  onClick={() => onAdd?.(p)}>
                    Comprar
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => remove(p.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && <p>No hay resultados.</p>}
      </div>
    </section>
  );
}
