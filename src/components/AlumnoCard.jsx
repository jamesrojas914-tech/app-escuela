import { useState } from "react";

const AlumnoCard = ({ nombre, carrera, estadoInicial, foto }) => {

  const [estado, setEstado] = useState(estadoInicial);

  const badgeColor = estado === "Matriculado" ? "bg-primary" : "bg-secondary";

  const cambiarEstado = () => {
    setEstado(estado === "Matriculado" ? "Inactivo" : "Matriculado");
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex align-items-center gap-3">
          
          {/* Foto */}
          <img
            src={foto || "https://ui-avatars.com/api/?name=" + encodeURIComponent(nombre) + "&background=1a3a6b&color=fff&size=64"}
            alt={nombre}
            width="64"
            height="64"
            className="rounded-circle object-fit-cover"
            style={{ minWidth: "64px" }}
          />

          {/* Info */}
          <div className="flex-grow-1">
            <h5 className="card-title text-primary mb-1">{nombre}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>{carrera}</h6>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <span className={`badge ${badgeColor}`}>{estado}</span>
              <button className="btn btn-sm btn-outline-success" onClick={cambiarEstado}>Cambiar Estado</button>
              <button className="btn btn-sm btn-outline-secondary">Editar</button>
              <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;