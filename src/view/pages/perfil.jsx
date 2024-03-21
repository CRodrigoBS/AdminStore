import React, { useContext } from 'react';
import { AuthContext } from './../../Providers/auth_provider';
import { FaUserCircle } from 'react-icons/fa';

const Perfil = () => {
    const { userData } = useContext(AuthContext);
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center" style={{ maxWidth: '600px', width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <div className="card-body">
                    <FaUserCircle className="mb-4" size={150} style={{ color: '#9a66cd' }} />
                    <h5 className="card-title mb-4">{userData ? `${userData.names} ${userData.lastnames}` : "Usuario"}</h5>
                    <div className="d-flex justify-content-between">
                        <div className="text-start">
                            <h6>Datos de Usuario</h6>
                            <p>Email: {userData.email ? userData.email : "prueba@gmail.com"}</p>
                            <p>DNI: {userData.document_number ? userData.document_number : "-"}</p>
                        </div>
                        <div className="text-end" style={{ maxWidth: '200px' }}>
                            <h6>Tipo de Usuario</h6>
                            <p>Usuario: {userData.role.name ? userData.role.name : "-"}</p>
                            <p style={{ wordWrap: 'break-word' }}>Permisos: {userData.role.permissions ? userData.role.permissions : "-"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;