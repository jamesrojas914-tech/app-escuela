// src/components/CursoForm.jsx
import { useState } from 'react';

const CursoForm = ({ recargarCursos }) => {
  const [formulario, setFormulario] = useState({
    nombre_curso: '', creditos: '', descripcion: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/cursos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formulario)
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        alert('Curso guardado exitosamente');
        setFormulario({ nombre_curso: '', creditos: '', descripcion: '' });
        recargarCursos();
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
        <h5 className="mb-0">Registrar Nuevo Curso</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-8">
              <label className="form-label">Nombre del Curso</label>
              <input type="text" className="form-control" name="nombre_curso" value={formulario.nombre_curso} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Créditos</label>
              <input type="number" className="form-control" name="creditos" value={formulario.creditos} onChange={manejarCambio} required />
            </div>
            <div className="col-12">
              <label className="form-label">Descripción</label>
              <textarea className="form-control" name="descripcion" rows={3} value={formulario.descripcion} onChange={manejarCambio} />
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

export default CursoForm;