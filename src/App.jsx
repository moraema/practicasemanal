// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './componentes/admin';
import Cliente from './componentes/product';
import Imagen1 from "./imagenes/manzana.avif";
import Imagen2 from "./imagenes/naranja.jpg";
import Nav from "./componentes/nav";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosData = [
      { id: 1, nombre: 'Manzana', precio: 10, imagen: Imagen1 },
      { id: 2, nombre: 'Naranja', precio: 20, imagen: Imagen2 },
    ];

    setProductos(productosData);
  }, []);

  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Cliente productos={productos} />} />
          <Route
            path="/admin"
            element={<AdminPage productos={productos} actualizarProductos={setProductos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
