import { useState } from "react";
import { useLocalDB } from "../hooks/useLocalDB";

const empty = { id: "", nombre: "", precio: 0, enStock: true, imagen: "", descripcion: "" };

export default function VdatosAdmin() {
  const { data, create, update, remove } = useLocalDB();
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const precio = Number(form.precio);
    if (!form.nombre.trim() || Number.isNaN(precio) || precio <= 0) return;

    if (editId) {
      update(editId, { ...form, precio });
    } else {
      create({ ...form, precio });
    }
    setForm(empty);
    setEditId(null);
  };

  const startEdit = (p) => {
    setEditId(p.id);
    setForm(p);
  };

  return (
    <section className="container py-4">
      <h1>Administrar productos</h1>

      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <label className="form-label">ID (opcional si creas)</label>
          <input className="form-control" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Autor</label>
          <input className="form-control" value={form.autor} onChange={(e) => setForm({ ...form, autor: e.target.value })} required />
        </div>
        <div className="col-md-2">
          <label className="form-label">Precio (€)</label>
          <input type="number" step="0.01" min="0" className="form-control" value={form.precio} onChange={(e) => setForm({ ...form, precio: e.target.value })} required />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <div className="form-check">
            <input id="chkStock" type="checkbox" className="form-check-input" checked={form.enStock} onChange={(e) => setForm({ ...form, enStock: e.target.checked })} />
            <label htmlFor="chkStock" className="form-check-label">En stock</label>
          </div>
        </div>
        <div className="col-12">
          <label className="form-label">Imagen (URL pública) y descripción</label>
          <input className="form-control mb-2" placeholder="/assets/tu-imagen.jpg" value={form.imagen} onChange={(e) => setForm({ ...form, imagen: e.target.value })} />
          <textarea className="form-control" rows={2} value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} />
        </div>
        <div className="col-12 d-flex gap-2">
          <button className="btn btn-success" type="submit">{editId ? "Guardar cambios" : "Añadir producto"}</button>
          <button className="btn btn-secondary" type="button" onClick={() => { setForm(empty); setEditId(null); }}>Reset</button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Autor</th><th>Precio</th><th>Stock</th><th style={{ width: 220 }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.autor}</td>
                <td>{p.precio.toFixed(2)} €</td>
                <td><span className={`badge ${p.enStock ? "bg-success" : "bg-danger"}`}>{p.enStock ? "Sí" : "No"}</span></td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => startEdit(p)}>Editar</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => remove(p.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan={5}>Sin productos</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
