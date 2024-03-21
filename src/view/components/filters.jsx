import React, { useState } from 'react';

function Filters() {

    // Función para manejar el clic del botón
    const [isClicked, setIsClicked] = useState(false);

    // Función para manejar el clic del botón
    const handleClick = () => {
        // Cambiar el estado para activar/desactivar la transformación
        setIsClicked(true);

        // Después de un segundo, revertir la transformación
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    };
    return (
        <div className="d-inline-flex flex-wrap align-items-end">
            {/* Filtro por marca */}
            <div className="mb-3 me-3">
                <label htmlFor="brandFilter" className="form-label">Marca:</label>
                <select id="brandFilter" className="form-select">
                    <option value="">Selecciona una marca</option>
                    {/* Renderizar opciones de marca */}
                </select>
            </div>

            {/* Filtro por modelo */}
            <div className="mb-3 me-3">
                <label htmlFor="modelFilter" className="form-label">Modelo:</label>
                <select id="modelFilter" className="form-select">
                    <option value="">Selecciona un modelo</option>
                    {/* Renderizar opciones de modelo */}
                </select>
            </div>

            {/* Filtro por color */}
            <div className="mb-3 me-3">
                <label htmlFor="colorFilter" className="form-label">Color:</label>
                <select id="colorFilter" className="form-select">
                    <option value="">Selecciona un color</option>
                    {/* Renderizar opciones de color */}
                </select>
            </div>

            {/* Filtro por talla */}
            <div className="mb-3 me-3">
                <label htmlFor="sizeFilter" className="form-label">Talla:</label>
                <select id="sizeFilter" className="form-select">
                    <option value="">Selecciona una talla</option>
                    {/* Renderizar opciones de talla */}
                </select>
            </div>

            <div className="mb-3 me-3">
                {/* Botón para aplicar los filtros */}
                <button
                    className="btn btn-primary align-self-end"
                    style={{
                        borderRadius: '20px',
                        border: '1px solid #9a66cd',
                        backgroundColor: '#9a66cd',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '12px 45px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        transition: 'transform 0.2s ease-in-out',
                        // Aplicar la transformación de escala cuando el botón está activo
                        transform: isClicked ? 'scale(0.95)' : 'scale(1)'
                    }}
                    onClick={handleClick}
                >
                    Aplicar Filtros
                </button>
            </div>


        </div>
    );
}

export default Filters;