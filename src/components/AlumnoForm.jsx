import { useState } from 'react';

const AlumnoForm = ({ recargarAlumnos }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    fecha_nacimiento: '',
    email: '',
    estado_matricula: 'matriculado'
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formulario)
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert('Alumno guardado exitosamente en la base de datos');
        setFormulario({
          nombre: '', apellidos: '', dni: '',
          fecha_nacimiento: '', email: '', estado_matricula: 'matriculado'
        });
        recargarAlumnos();
      } else {
        console.log('Errores de validación:', datos.errors);
        alert('Error al guardar. Revisa la consola para más detalles.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor de Laravel.');
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Registrar Nuevo Alumno</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombres</label>
              <input type="text" className="form-control" name="nombre"
                value={formulario.nombre} onChange={manejarCambio} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" name="apellidos"
                value={formulario.apellidos} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">DNI</label>
              <input type="text" className="form-control" name="dni"
                value={formulario.dni} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" name="fecha_nacimiento"
                value={formulario.fecha_nacimiento} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email"
                value={formulario.email} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Estado</label>
              <select className="form-select" name="estado_matricula"
                value={formulario.estado_matricula} onChange={manejarCambio}>
                <option value="Matriculado">Matriculado</option>
                <option value="Inactivo">Inactivo</option>
              </select>
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

export default AlumnoForm;