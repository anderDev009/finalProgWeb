import React from 'react'
import Link from "next/link"

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom:"1px solid" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/libros">Libros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/autores">Autores</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/contacto">Contacto</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar