import { Routes, Route, Navigate } from "react-router-dom";

// Páginas
import Home from "../pages/Home";
import Vdatos from "../pages/Vdatos";
import VdatosDetail from "../pages/VdatosDetail";
import VdatosAdmin from "../pages/VdatosAdmin"
import Login from "../pages/Login";

// Dashboard (rutas anidadas)
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";

// Rutas protegidas
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Vdatos />} />
      <Route path="/products/:id" element={<VdatosDetail />} />
	  <Route path="/admin/products" element={<VdatosAdmin />} />

      <Route path="/login" element={<Login />} />

      {/* Rutas anidadas protegidas */}
      <Route
        path="/dashboard"
        element={(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      >
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Redirección de rutas antiguas */}
      <Route path="/old-products" element={<Navigate to="/products" replace />} />

      {/* 404 */}
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
}
