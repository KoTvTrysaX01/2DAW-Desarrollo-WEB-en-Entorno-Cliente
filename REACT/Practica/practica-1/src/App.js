import React from "react";
function App() {
  const eventos = [
    { id: 1, nombre: "Conferencia de Ciberseguridad", fecha: "12/12/2025" },
    { id: 2, nombre: "Taller de React", fecha: "15/12/2025" },
    { id: 3, nombre: "Hackathon Universitario", fecha: "20/12/2025" },
  ];
  return (
    <div className="border rounded border-primary p-3 m-2 bg-primary text-light">
      <h1 className="display-3"> Lista de Eventos</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {eventos.map((evento) => (
          <li className="border rounded border-primary p-3 m-2 bg-warning text-dark"
            key={evento.id}

          >
            <h2>{evento.nombre}</h2>
            <p className="display-7"> Fecha: {evento.fecha}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
