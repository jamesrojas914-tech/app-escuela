// src/components/ProfesorForm.jsx
import { useState } from 'react';

const ProfesorForm = ({ recargarProfesores }) => {
  const [formulario, setFormulario] = useState({
    nombre: '', apellidos: '', fecha_nacimiento: '',
    dni: '', direccion: '', telefono: '', email: '', especialidad: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/profesores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formulario)
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        alert('Profesor guardado exitosamente');
        setFormulario({ nombre: '', apellidos: '', fecha_nacimiento: '', dni: '', direccion: '', telefono: '', email: '', especialidad: '' });
        recargarProfesores();
      } else {
        console.log('Errores:', datos.errors);
        alert('Error al guardar. Revisa la consola.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Registrar Nuevo Profesor</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombres</label>
              <input type="text" className="form-control" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" name="apellidos" value={formulario.apellidos} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">DNI</label>
              <input type="text" className="form-control" name="dni" maxLength={8} value={formulario.dni} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" name="fecha_nacimiento" value={formulario.fecha_nacimiento} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Teléfono</label>
              <input type="text" className="form-control" name="telefono" maxLength={9} value={formulario.telefono} onChange={manejarCambio} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formulario.email} onChange={manejarCambio} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Especialidad</label>
              <input type="text" className="form-control" name="especialidad" value={formulario.especialidad} onChange={manejarCambio} required />
            </div>
            <div className="col-12">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" name="direccion" value={formulario.direccion} onChange={manejarCambio} />
            </div>
            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-save me-2"></i>Guardar en MySQL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfesorForm;