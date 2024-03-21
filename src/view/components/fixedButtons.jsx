import React from 'react';
import { FaPlus, FaFileExcel } from 'react-icons/fa';

function FixedButtons({ handleShow, handleMouseDown, handleMouseUp, clicked, setClicked }) {
    return (
        <div className="fixed-buttons" style={{ position: 'fixed', bottom: '20px', right: '20px' }}> {/* Ajustar posición */}
            <div className='d-flex flex-column justify-content-end align-items-end'>
                <button
                    className="btn btn-lg rounded-circle" // Utilizamos la clase rounded-circle para hacer el botón completamente redondo
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Agregar nuevo producto"
                    onClick={handleShow}
                    onMouseEnter={() => setClicked(true)} // Cambia el estado cuando el mouse entra al botón
                    onMouseLeave={() => setClicked(false)} // Cambia el estado cuando el mouse sale del botón
                    style={{
                        background: clicked ? '#8a2be2' : '#a64dff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        marginBottom: '10px', // Espacio entre los botones
                        marginRight: '10px', // Espacio adicional a la derecha
                        display: 'flex', // Utilizar flexbox para centrar el contenido
                        justifyContent: 'center', // Centrar horizontalmente
                        alignItems: 'center', // Centrar verticalmente
                        padding: '20px' // Ajustar el padding vertical para aumentar la altura
                    }}
                >
                    <FaPlus style={{ fontSize: '24px' }} /> {/* Ajustar tamaño del icono */}
                </button>

                <button
                    className="btn btn-lg rounded-circle" // Utilizamos la clase rounded-circle para hacer el botón completamente redondo
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Exportar a excel"
                    onClick={handleShow}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    style={{
                        background: clicked ? '#2ecc71' : '#27ae60',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        marginRight: '10px', // Espacio adicional a la derecha
                        display: 'flex', // Utilizar flexbox para centrar el contenido
                        justifyContent: 'center', // Centrar horizontalmente
                        alignItems: 'center', // Centrar verticalmente
                        padding: '20px' // Ajustar el padding vertical para aumentar la altura
                    }}
                >
                    <FaFileExcel style={{ fontSize: '24px' }} /> {/* Ajustar tamaño del icono */}
                </button>
            </div>
        </div>
    );
}

export default FixedButtons;