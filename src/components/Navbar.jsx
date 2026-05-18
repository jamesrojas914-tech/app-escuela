import { useState } from "react";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "inicio", label: "Inicio", icon: "fas fa-home" },
    { id: "cursos", label: "Cursos", icon: "fas fa-book-open" },
    { id: "especializaciones", label: "Especializaciones", icon: "fas fa-certificate" },
    { id: "contacto", label: "Contacto", icon: "fas fa-phone-alt" },
  ];

  return (
    <>
      <style>{`
       .senati-navbar {
  background: #1a3a6b;
  padding: 0 1.5rem;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 0 0 12px 12px;
}
        .senati-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .senati-logo-box {
          width: 42px;
          height: 42px;
          background: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .senati-logo-box img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }
        .senati-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .senati-brand-main {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .senati-brand-sub {
          font-size: 10.5px;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .senati-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .senati-nav-link {
          color: rgba(255,255,255,0.78);
          font-size: 13.5px;
          padding: 7px 13px;
          border-radius: 7px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.15s, color 0.15s;
        }
        .senati-nav-link:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }
        .senati-nav-link.active {
          background: rgba(255,255,255,0.18);
          color: #fff;
          font-weight: 600;
        }
        .senati-divider {
          width: 1px;
          height: 22px;
          background: rgba(255,255,255,0.2);
          margin: 0 6px;
        }
        .senati-btn-login {
          background: #fff;
          color: #1a3a6b;
          border: none;
          padding: 8px 18px;
          border-radius: 7px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: opacity 0.15s;
        }
        .senati-btn-login:hover { opacity: 0.88; }
        .senati-hamburger {
          display: none;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 6px;
          color: #fff;
          padding: 6px 10px;
          cursor: pointer;
          font-size: 16px;
        }
        .senati-mobile-menu {
          display: none;
          flex-direction: column;
          background: #132e58;
          padding: 12px 1rem;
          gap: 4px;
        }
        .senati-mobile-menu.open { display: flex; }
        .senati-mobile-link {
          color: rgba(255,255,255,0.82);
          font-size: 14px;
          padding: 9px 12px;
          border-radius: 7px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background 0.15s;
        }
        .senati-mobile-link:hover,
        .senati-mobile-link.active {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }
        .senati-mobile-login {
          margin-top: 8px;
          background: #fff;
          color: #1a3a6b;
          border: none;
          padding: 9px 14px;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 768px) {
          .senati-links { display: none; }
          .senati-hamburger { display: block; }
        }
      `}</style>

      <nav className="senati-navbar">
        <a className="senati-brand" href="#">
          <div className="senati-logo-box">
          <img src={logoImg} alt="Logo SENATI" />
          </div>
          <div className="senati-brand-text">
            <span className="senati-brand-main">SENATI</span>
            <span className="senati-brand-sub">Sistema de Matrícula</span>
          </div>
        </a>

        <div className="senati-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`senati-nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={() => setActiveLink(link.id)}
            >
              <i className={link.icon}></i>
              {link.label}
            </button>
          ))}
          <div className="senati-divider" />
          <button className="senati-btn-login">
            <i className="fas fa-sign-in-alt"></i>
            Iniciar sesión
          </button>
        </div>

        <button
          className="senati-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </nav>

      <div className={`senati-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`senati-mobile-link ${activeLink === link.id ? "active" : ""}`}
            onClick={() => { setActiveLink(link.id); setMenuOpen(false); }}
          >
            <i className={link.icon}></i>
            {link.label}
          </button>
        ))}
        <button className="senati-mobile-login">
          <i className="fas fa-sign-in-alt"></i>
          Iniciar sesión
        </button>
      </div>
    </>
  );
};

export default Navbar;