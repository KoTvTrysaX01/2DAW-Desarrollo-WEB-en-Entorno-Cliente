// src/hooks/useLocalDB.js
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "productos_db_v1";

export function useLocalDB() {
  const [data, setData] = useState([]); // Array de productos
  const [loading, setLoading] = useState(true);

  // Carga inicial desde localStorage o desde /products.json
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData(JSON.parse(stored));
        setLoading(false);
        return;
      }
    } catch (_) {
      // Si parse falla, seguimos y recargamos desde JSON
    }

    fetch(process.env.PUBLIC_URL + "/catalog.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        const productos = Array.isArray(json)
          ? json
          : json && json.productos
            ? json.productos
            : [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
        setData(productos);
      })
      .catch(function () {
        // Si falla la carga inicial, dejamos data como []
        setData([]);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  // Guardar cambios en memoria + persistencia
  function save(newData) {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }

  // Generador de IDs sencillo, sin backticks ni crypto
  function genId() {
    return "prod-" + Math.random().toString(36).slice(2, 10);
  }

  // CRUD
  function create(item) {
    const trimmed = item && item.id ? String(item.id).trim() : "";
    const newId = trimmed !== "" ? trimmed : genId();
    const newItem = { ...item, id: newId };
    save([...data, newItem]);
    return newItem;
  }

  function update(id, updates) {
    const next = data.map(function (p) {
      return p.id === id ? { ...p, ...updates } : p;
    });
    save(next);
  }

  function remove(id) {
    const next = data.filter(function (p) {
      return p.id !== id;
    });
    save(next);
  }

  // Lectura
  function findById(id) {
    return data.find(function (p) {
      return p.id === id;
    });
  }

  function search(q) {
    const t = (q || "").toLowerCase();
    return data.filter(function (p) {
      return (
        String(p.id).toLowerCase().includes(t) ||
        String(p.nombre).toLowerCase().includes(t) ||
        String(p.precio).includes(t)
      );
    });
  }

  return useMemo(
    function () {
      return { data, loading, create, update, remove, findById, search };
    },
    [data, loading],
  );
}
