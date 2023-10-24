// AdminPage.jsx
import React, { useState } from 'react';
import "./admin.css";

function AdminPage({ productos, actualizarProductos }) {
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: 0, imagen: '' });
  const [productoEditando, setProductoEditando] = useState(null);

  const agregarProducto = () => {
    // Simula la creación de un nuevo producto
    const nuevoId = Math.max(...productos.map((producto) => producto.id), 0) + 1;
    const datosNuevoProducto = { id: nuevoId, ...nuevoProducto };
    const productosActualizados = [...productos, datosNuevoProducto];
    actualizarProductos(productosActualizados);
    setNuevoProducto({ nombre: '', precio: 0, imagen: '' });
  };

  const editarProducto = (producto) => {
    setProductoEditando(producto);
    setNuevoProducto({ nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen });
  };

  const actualizarProducto = () => {
    // Simula la actualización de un producto
    const productosActualizados = productos.map((producto) => {
      if (producto.id === productoEditando.id) {
        return { ...producto, ...nuevoProducto };
      }
      return producto;
    });

    actualizarProductos(productosActualizados);
    setProductoEditando(null);
    setNuevoProducto({ nombre: '', precio: 0, imagen: '' });
  };

  const eliminarProducto = (idProducto) => {
    // Simula la eliminación de un producto
    const productosActualizados = productos.filter((producto) => producto.id !== idProducto);
    actualizarProductos(productosActualizados);
  };



  const isFormIncomplete = !nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.imagen;

  return (
    <div>
      <h1>Productos</h1>
      <table>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagen} alt={producto.nombre} />
              </td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>
                <button className="edit-button" onClick={() => editarProducto(producto)}>
                  Editar
                </button>
                <button className="delete-button" onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {productoEditando ? (
        <div>
          <h2>Editar Producto</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={nuevoProducto.imagen}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })}
          />
          <button className="create-button" onClick={actualizarProducto} disabled={isFormIncomplete}>
            Actualizar
          </button>
        </div>
      ) : (
        <div>
          <h2>Crear Nuevo Producto</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={nuevoProducto.imagen}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })}
          />
          <button className="create-button" onClick={agregarProducto} disabled={isFormIncomplete}>
            Crear
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
