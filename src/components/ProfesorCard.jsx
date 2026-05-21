// src/components/ProfesorCard.jsx
const ProfesorCard = ({ nombre, especialidad, email, telefono }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex align-items-center gap-3">
          <img
            src={"https://ui-avatars.com/api/?name=" + encodeURIComponent(nombre) + "&background=1a3a6b&color=fff&size=64"}
            alt={nombre}
            width="64" height="64"
            className="rounded-circle object-fit-cover"
            style={{ minWidth: "64px" }}
          />
          <div className="flex-grow-1">
            <h5 className="card-title text-primary mb-1">{nombre}</h5>
            <p className="mb-1 text-muted" style={{ fontSize: "13px" }}>
              <i className="fas fa-chalkboard-teacher me-1"></i>{especialidad}
            </p>
            <p className="mb-1 text-muted" style={{ fontSize: "13px" }}>
              <i className="fas fa-envelope me-1"></i>{email}
            </p>
            <p className="mb-2 text-muted" style={{ fontSize: "13px" }}>
              <i className="fas fa-phone me-1"></i>{telefono}
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-outline-secondary">Editar</button>
              <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesorCard;