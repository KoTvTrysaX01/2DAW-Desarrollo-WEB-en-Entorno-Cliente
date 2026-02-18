import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "token-demo");
    navigate("/dashboard", { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <section className="container py-4">
      <h1>Login</h1>
      <button className="btn btn-primary me-2" onClick={handleLogin}>
        Iniciar sesión (demo)
      </button>
      <button className="btn btn-outline-secondary" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </section>
  );
}
