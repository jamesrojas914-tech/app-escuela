import AlumnoCard from "./components/AlumnoCard"
import Navbar from "./components/Navbar"

function App(){
  return (
      <>
      
        <Navbar/>
        <div className="container">
          <h1 className="mb-4"> Listado de Alumnos</h1>
          <div className="row">
          <AlumnoCard
          nombre = "James Rojas"
          carrera = "Informatica y desarrollo de aplicaciones web"
          estado = "Inactivo"
          />
          <AlumnoCard
          nombre = "Tifanny Ramos"
          carrera = "Enfermeria"
          estado = "Matriculado"
          />
          <AlumnoCard
          nombre = "Andre Zapata"
          carrera = "Informatica y desarrollo de aplicaciones web"
          estado = "Inactivo"
          />
          <AlumnoCard
          nombre = "Rodrigo Ormeño"
          carrera = "Informatica y desarrollo de aplicaciones web"
          estado = "Matriculado"
          />
          <AlumnoCard
          nombre = "Angel Ordaya"
          carrera = "Informatica y desarrollo de aplicaciones web"
          estado = "Matriculado"
          />
          <AlumnoCard
          nombre = "Harol Hernandez"
          carrera = "Informatica y desarrollo de aplicaciones web"
          estado = "Inactivo"
          />
          <AlumnoCard
          nombre = "Tifa Ramos"
          carrera = "Ingenieria de Sistemas"
          estado = "Matriculado"
          />
          <AlumnoCard
          nombre = "Tifa Ramos"
          carrera = "Ingenieria de Sistemas"
          estado = "Matriculado"
          />

          </div>
        </div>
      
      </>
  )
}

export default App