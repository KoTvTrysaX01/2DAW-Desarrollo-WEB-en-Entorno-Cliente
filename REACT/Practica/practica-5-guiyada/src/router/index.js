import { Routes, Route, Navigate } from "react-router-dom";

// Páginas
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import ProductAdmin from "../pages/ProductAdmin"
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

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
	  <Route path="/admin/products" element={<ProductAdmin />} />

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
