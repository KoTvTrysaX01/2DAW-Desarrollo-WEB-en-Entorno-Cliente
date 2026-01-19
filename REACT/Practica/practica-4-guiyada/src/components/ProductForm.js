import React, { useState } from "react";
const MAX_IMAGE_SIZE_MB = 1;
export default function ProductForm({ onAdd }) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [enStock, setEnStock] = useState(true);
  const [imagen, setImagen] = useState(null);
  const [imgName, setImgName] = useState("");
  const [error, setError] = useState("");
  const resetForm = () => {
    setId("");
    setNombre("");
    setPrecio("");
    setEnStock(true);
    setImagen(null);
    setImgName("");
    setError("");
  };
  const handleImageChange = (e) => {
    setError("");
    const file = e.target.files?.[0];
    if (!file) {
      setImagen(null);
      setImgName("");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.");
      e.target.value = null;
      return;
    }
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > MAX_IMAGE_SIZE_MB) {
      setError(`La imagen supera ${MAX_IMAGE_SIZE_MB} MB.`);
      e.target.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImagen(reader.result);
      setImgName(file.name);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const precioNum = parseFloat(precio);
    if (!id.trim() || !nombre.trim() || isNaN(precioNum) || precioNum <= 0) {
      setError("Completa todos los campos correctamente.");
      return;
    }
    onAdd({
      id: id.trim(),
      nombre: nombre.trim(),
      precio: precioNum,
      enStock,
      imagen: imagen || "",
    });
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <h3 className="mb-3">Nuevo producto</h3>
      <div className="mb-2">
        <label className="form-label">Código</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Precio (€)</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="chkStock"
          checked={enStock}
          onChange={(e) => setEnStock(e.target.checked)}
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="chkStock">
          Disponible
        </label>
      </div>
      <div className="mb-2">
        <label className="form-label">Imagen del producto</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageChange}
        />
      </div>
      {imagen && (
        <div className="mb-3">
          <label className="form-label d-block">Vista previa</label>
          <img
            src={imagen}
            alt={imgName || nombre || "Imagen del producto"}
            className="img-thumbnail"
            style={{ width: "120px" }}
          />
          {imgName && <div className="text-muted small mt-1">{imgName}</div>}
        </div>
      )}
      {error && <div className="alert alert-danger py-2">{error}</div>}
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-success">
          Añadir producto
        </button>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>
    </form>
  );
}
