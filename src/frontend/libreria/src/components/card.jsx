


function CardBook({ props }) {
    return (
        <div className="card mb-3" style={{ height: '100%', maxWidth: 400, maxHeight: 400 }}>
            <div className="row g-0" style={{ height: '100%' }}>
                <div className="col-md-4" >
                    <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                </div>
                <div className="col-md-8" >
                    <div className="card-body" >
                        <h5 className="card-title"> <strong>Ttitulo:</strong><br />   {props.titulo}</h5>
                        <p className="card-text"><strong>Tipo:</strong> {props.tipo}.</p>
                        <p className="card-text"><strong>Precio:</strong> ${props.precio}</p>
                        <p className="card-text"><strong>Total de ventas:</strong> {props.total_ventas}</p>
                        <p className="card-text"><small className="text-body-secondary"><strong>Publicado:</strong> {props.fecha_pub}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBook