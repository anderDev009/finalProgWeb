"use client";
import config from '@/config';
import { useState } from 'react'
function FormContact() {
    const today = new Date().toISOString().split('T')[0];
    
    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        comentario: '',
        fecha: today,
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const resetForm = () => {
        setFormData({
            nombre: '',
            asunto: '',
            comentario: '',
            fecha: today ,
            email: ''
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones
        try {
            const response = fetch(`${config.address}/v1/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response) {
                throw new error("Error al enviar el formulario")
            }
            const responseData = await response
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
        resetForm();
    };
    return (
        <form onSubmit={handleSubmit} style={{ color: "black", fontWeight: "500" }}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                    Nombre:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="asunto" className="form-label">
                    Asunto:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comentario" className="form-label">
                    Comentario:
                </label>
                <textarea
                    className="form-control"
                    id="comentario"
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">
                    Fecha:
                </label>
                <input
                    readOnly
                    type="date"
                    className="form-control"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    )
}

export default FormContact