// src/components/CursoCard.jsx
const CursoCard = ({ nombre_curso, creditos, descripcion }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex align-items-center gap-3">
          <div
            className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
            style={{ minWidth: "64px", width: "64px", height: "64px", fontSize: "28px" }}
          >
            <i className="fas fa-book-open"></i>
          </div>
          <div className="flex-grow-1">
            <h5 className="card-title text-primary mb-1">{nombre_curso}</h5>
            <p className="mb-1">
              <span className="badge bg-success">
                <i className="fas fa-star me-1"></i>{creditos} créditos
              </span>
            </p>
            <p className="text-muted mt-1" style={{ fontSize: "13px" }}>{descripcion}</p>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-sm btn-outline-secondary">Editar</button>
              <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoCard;