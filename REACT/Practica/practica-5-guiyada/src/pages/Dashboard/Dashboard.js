import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="container py-4">
      <h1>Panel de Control</h1>
      <nav className="d-flex gap-3 mb-3">
        <Link to="profile">Perfil</Link>
        <Link to="settings">Configuración</Link>
      </nav>
      <Outlet />
    </section>
  );
}