import { useParams, Link } from "react-router-dom";
import { useLocalDB } from "../hooks/useLocalDB";

export default function ProductDetail() {
  const { id } = useParams();
  const { findById } = useLocalDB();
  const product = findById(id);

  if (!product) {
    return (
      <section className="container py-4">
        <p>Producto no encontrado.</p>
        <Link to="/products">Volver al listado</Link>
      </section>
    );
  }

  return (
    <section className="container py-4">
      <h1>{product.nombre}</h1>
      {product.imagen && (
        <img
          src={product.imagen}
          alt={product.nombre}
          className="img-fluid mb-3"
          style={{ maxWidth: 320 }}
        />
      )}
      <p><strong>Código:</strong> {product.id}</p>
      <p><strong>Precio:</strong> {product.precio.toFixed(2)} €</p>
      <p><strong>Disponible:</strong> {product.enStock ? "Sí" : "No"}</p>
      {product.descripcion && <p>{product.descripcion}</p>}
      <Link to="/products" className="btn btn-secondary mt-3">Volver</Link>
    </section>
  );
}
