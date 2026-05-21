import { useState } from "react";
import logoImg from "../assets/logo.png";

<<<<<<< HEAD
const Navbar = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { id: "inicio", label: "Inicio", icon: "fas fa-home" },
  { id: "estudiantes", label: "Estudiantes", icon: "fas fa-user-graduate" },
  { id: "profesores", label: "Profesores", icon: "fas fa-chalkboard-teacher" },
  { id: "cursos", label: "Cursos", icon: "fas fa-book-open" },
  { id: "contacto", label: "Contacto", icon: "fas fa-phone-alt" },
];
=======
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "inicio", label: "Inicio", icon: "fas fa-home" },
    { id: "cursos", label: "Cursos", icon: "fas fa-book-open" },
    { id: "especializaciones", label: "Especializaciones", icon: "fas fa-certificate" },
    { id: "contacto", label: "Contacto", icon: "fas fa-phone-alt" },
  ];
>>>>>>> ebf52ee0999e8c8107f21491b7397e527d239eac

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">

          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={logoImg} alt="Logo SENATI" width="34" height="34" className="object-fit-contain" />
            <div className="d-flex flex-column lh-sm">
              <span className="fw-bold text-white" style={{ fontSize: "16px" }}>SENATI</span>
              <span className="text-white-50 text-uppercase" style={{ fontSize: "10px", letterSpacing: "0.06em" }}>
                Sistema de Matrícula
              </span>
            </div>
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Links */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-1">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <button
                    className={`btn btn-sm d-flex align-items-center gap-2 ${
                      activeLink === link.id
                        ? "btn-light text-primary fw-semibold"
                        : "btn-outline-light border-0 text-white"
                    }`}
                    onClick={() => { setActiveLink(link.id); setMenuOpen(false); }}
                  >
                    <i className={link.icon}></i>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Login button */}
            <button className="btn btn-light text-primary fw-bold d-flex align-items-center gap-2">
              <i className="fas fa-sign-in-alt"></i>
              Iniciar sesión
            </button>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;