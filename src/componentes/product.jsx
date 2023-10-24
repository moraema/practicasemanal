// Cliente.jsx
import React, { useState } from 'react';
import './product.css';
import cartIcon from '../imagenes/carrito.png';

function Cliente({ productos }) {
  const [carrito, setCarrito] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarAlCarrito = (producto) => {
    const carritoActualizado = [...carrito];
    const productoExistente = carritoActualizado.find((p) => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carritoActualizado.push({ ...producto, cantidad: 1 });
    }
    setCarrito(carritoActualizado);
  };

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const eliminarProducto = (producto) => {
    const carritoActualizado = [...carrito];
    const productoExistente = carritoActualizado.find((p) => p.id === producto.id);
    if (productoExistente) {
      if (productoExistente.cantidad > 1) {
        productoExistente.cantidad -= 1;
      } else {
        carritoActualizado.splice(carritoActualizado.indexOf(productoExistente), 1);
      }
      setCarrito(carritoActualizado);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const mostrarMasDeNueve = cantidadEnCarrito > 9;

  return (
    <div>
      <h1>Productos</h1>
      <div className="card-container">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <button className="button" onClick={() => agregarAlCarrito(producto)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
      <div className="carrito" onClick={abrirModal}>
        <img src={cartIcon} alt="Carrito" />
        {mostrarMasDeNueve ? '+9' : cantidadEnCarrito}
      </div>
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>
              &times;
            </span>
            <h2>Productos en el Carrito</h2>
            {carrito.length === 0 ? (
              <p>Carrito Vacío</p>
            ) : (
              <ul>
                {carrito.map((producto) => (
                  <li key={producto.id}>
                    {producto.nombre} {producto.cantidad}  - ${producto.precio} C/U
                    <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
                  </li>
                ))}
              </ul>
            )}
            {carrito.length > 0 && <p>Total: ${calcularTotal()}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cliente;
