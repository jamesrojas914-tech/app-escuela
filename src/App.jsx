import { useState, useEffect } from 'react';
import AlumnoCard from "./components/AlumnoCard";
import Navbar from "./components/Navbar";
import Contador from "./components/Contador";
import AlumnoForm from "./components/AlumnoForm";

function App() {
  const [alumnos, setAlumnos] = useState([
    { id_alumno: 1, nombre: "James", apellidos: "Rojas", email: "james@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 2, nombre: "Tifanny", apellidos: "Ramos", email: "tifanny@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 3, nombre: "Andre", apellidos: "Zapata", email: "andre@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 4, nombre: "Rodrigo", apellidos: "Ormeño", email: "rodrigo@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 5, nombre: "Angel", apellidos: "Ordaya", email: "angel@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 6, nombre: "Harol", apellidos: "Hernandez", email: "harol@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 7, nombre: "Tifa", apellidos: "Ramos", email: "tifa@senati.pe", estado_matricula: "Matriculado" },
  ]);

  const obtenerAlumnos = async () => {
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos');
      const datos = await respuesta.json();
      if (datos && (datos.data || Array.isArray(datos))) {
        setAlumnos(datos.data || datos);
      }
    } catch (error) {
      console.error('Laravel no disponible, mostrando datos locales:', error);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-4">Listado de Alumnos</h1>
        <Contador />
        <AlumnoForm recargarAlumnos={obtenerAlumnos} />
        <div className="row mt-4">
          {alumnos.map((alumno) => (
            <AlumnoCard
              key={alumno.id_alumno}
              nombre={`${alumno.nombre} ${alumno.apellidos}`}
              carrera={alumno.email}
              estadoInicial={alumno.estado_matricula}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;