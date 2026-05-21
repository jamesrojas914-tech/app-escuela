<<<<<<< HEAD
// App.jsx
=======
>>>>>>> ebf52ee0999e8c8107f21491b7397e527d239eac
import { useState, useEffect } from 'react';
import AlumnoCard from "./components/AlumnoCard";
import Navbar from "./components/Navbar";
import Contador from "./components/Contador";
import AlumnoForm from "./components/AlumnoForm";
<<<<<<< HEAD
import ProfesorForm from "./components/ProfesorForm";
import ProfesorCard from "./components/ProfesorCard";
import CursoForm from "./components/CursoForm";
import CursoCard from "./components/CursoCard";

function App() {
  const [activeLink, setActiveLink] = useState("inicio");

  // 👇 PASO 1: Estado de conteos agregado aquí
  const [conteos, setConteos] = useState({ alumnos: 0, profesores: 0, cursos: 0 });

=======

function App() {
>>>>>>> ebf52ee0999e8c8107f21491b7397e527d239eac
  const [alumnos, setAlumnos] = useState([
    { id_alumno: 1, nombre: "James", apellidos: "Rojas", email: "james@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 2, nombre: "Tifanny", apellidos: "Ramos", email: "tifanny@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 3, nombre: "Andre", apellidos: "Zapata", email: "andre@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 4, nombre: "Rodrigo", apellidos: "Ormeño", email: "rodrigo@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 5, nombre: "Angel", apellidos: "Ordaya", email: "angel@senati.pe", estado_matricula: "Matriculado" },
    { id_alumno: 6, nombre: "Harol", apellidos: "Hernandez", email: "harol@senati.pe", estado_matricula: "Inactivo" },
    { id_alumno: 7, nombre: "Tifa", apellidos: "Ramos", email: "tifa@senati.pe", estado_matricula: "Matriculado" },
  ]);
<<<<<<< HEAD
  const [profesores, setProfesores] = useState([]);
  const [cursos, setCursos] = useState([]);
=======
>>>>>>> ebf52ee0999e8c8107f21491b7397e527d239eac

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

<<<<<<< HEAD
  const obtenerProfesores = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/profesores');
      const datos = await res.json();
      setProfesores(datos.data || datos);
    } catch (error) {
      console.error('Error al cargar profesores:', error);
    }
  };

  const obtenerCursos = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/cursos');
      const datos = await res.json();
      setCursos(datos.data || datos);
    } catch (error) {
      console.error('Error al cargar cursos:', error);
    }
  };

  // 👇 PASO 2: Función de conteos agregada aquí
  const obtenerConteos = async () => {
    try {
      const [resA, resP, resC] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/alumnos'),
        fetch('http://127.0.0.1:8000/api/profesores'),
        fetch('http://127.0.0.1:8000/api/cursos'),
      ]);
      const [dataA, dataP, dataC] = await Promise.all([
        resA.json(), resP.json(), resC.json()
      ]);
      setConteos({
        alumnos: (dataA.data || dataA).length,
        profesores: (dataP.data || dataP).length,
        cursos: (dataC.data || dataC).length,
      });
    } catch (error) {
      console.error('Error al obtener conteos:', error);
    }
  };

  // 👇 PASO 3: obtenerConteos() agregado al useEffect
  useEffect(() => {
    obtenerAlumnos();
    obtenerProfesores();
    obtenerCursos();
    obtenerConteos();
  }, []);

  const renderPage = () => {
    switch (activeLink) {
      case "inicio":
        return (
          <div>
            {/* HERO */}
            <div className="text-white text-center py-5" style={{ backgroundColor: "#0a2240" }}>
              <div className="container py-3">
                <span className="badge bg-success mb-3">🟢 Sistema activo</span>
                <h1 className="display-5 fw-bold mb-3">
                  Bienvenido al Sistema de <br />
                  <span className="text-warning">Matrícula SENATI</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  Administra estudiantes, docentes y cursos desde un solo lugar.
                </p>
                <div className="d-flex gap-2 justify-content-center">
                  <button className="btn btn-warning fw-semibold px-4" onClick={() => setActiveLink("estudiantes")}>
                    Ver estudiantes
                  </button>
                  <button className="btn btn-outline-light px-4" onClick={() => setActiveLink("profesores")}>
                    Ver profesores
                  </button>
                </div>

                {/* 👇 PASO 4: Números conectados a la base de datos */}
                <div className="row justify-content-center mt-5 border-top border-secondary pt-4">
                  <div className="col-4 col-md-2 border-end border-secondary">
                    <h3 className="fw-bold text-warning mb-0">{conteos.alumnos}</h3>
                    <small className="text-white-50 text-uppercase">Alumnos</small>
                  </div>
                  <div className="col-4 col-md-2 border-end border-secondary">
                    <h3 className="fw-bold text-warning mb-0">{conteos.profesores}</h3>
                    <small className="text-white-50 text-uppercase">Profesores</small>
                  </div>
                  <div className="col-4 col-md-2">
                    <h3 className="fw-bold text-warning mb-0">{conteos.cursos}</h3>
                    <small className="text-white-50 text-uppercase">Cursos</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="container py-5">
              <h5 className="text-center text-muted mb-4">¿Qué deseas gestionar hoy?</h5>
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center p-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveLink("estudiantes")}>
                    <div className="card-body">
                      <div className="mb-3">
                        <i className="fas fa-user-graduate fa-3x text-primary"></i>
                      </div>
                      <h5 className="card-title fw-semibold">Estudiantes</h5>
                      <p className="card-text text-muted">Consulta y gestiona el estado de matrícula de cada alumno.</p>
                      <span className="btn btn-outline-primary btn-sm mt-2">Ir a Estudiantes →</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center p-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveLink("profesores")}>
                    <div className="card-body">
                      <div className="mb-3">
                        <i className="fas fa-chalkboard-teacher fa-3x text-success"></i>
                      </div>
                      <h5 className="card-title fw-semibold">Profesores</h5>
                      <p className="card-text text-muted">Administra los docentes y sus especialidades.</p>
                      <span className="btn btn-outline-success btn-sm mt-2">Ir a Profesores →</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0 text-center p-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveLink("cursos")}>
                    <div className="card-body">
                      <div className="mb-3">
                        <i className="fas fa-book-open fa-3x text-warning"></i>
                      </div>
                      <h5 className="card-title fw-semibold">Cursos</h5>
                      <p className="card-text text-muted">Revisa el catálogo de cursos, créditos y descripciones.</p>
                      <span className="btn btn-outline-warning btn-sm mt-2">Ir a Cursos →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer bar */}
            <div className="bg-light border-top text-center py-3">
              <small className="text-muted">
                <strong>SENATI</strong> — Sistema de Matrícula &nbsp;·&nbsp; Laravel 12 · React · MySQL
              </small>
            </div>
          </div>
        );

      case "estudiantes":
        return (
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
        );

      case "profesores":
        return (
          <div className="container mt-4">
            <h1 className="mb-4">Listado de Profesores</h1>
            <ProfesorForm recargarProfesores={obtenerProfesores} />
            <div className="row mt-4">
              {profesores.map((p) => (
                <ProfesorCard
                  key={p.id_profesor}
                  nombre={`${p.nombre} ${p.apellidos}`}
                  especialidad={p.especialidad}
                  email={p.email}
                  telefono={p.telefono}
                />
              ))}
            </div>
          </div>
        );

      case "cursos":
        return (
          <div className="container mt-4">
            <h1 className="mb-4">Listado de Cursos</h1>
            <CursoForm recargarCursos={obtenerCursos} />
            <div className="row mt-4">
              {cursos.map((c) => (
                <CursoCard
                  key={c.id_curso}
                  nombre_curso={c.nombre_curso}
                  creditos={c.creditos}
                  descripcion={c.descripcion}
                />
              ))}
            </div>
          </div>
        );

      case "contacto":
        return (
          <div className="text-center mt-5">
            <i className="fas fa-phone-alt text-primary" style={{ fontSize: "48px" }}></i>
            <h2 className="mt-3">Contacto</h2>
            <p className="text-muted">Próximamente...</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="container">
        {renderPage()}
=======
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
>>>>>>> ebf52ee0999e8c8107f21491b7397e527d239eac
      </div>
    </>
  );
}

export default App;