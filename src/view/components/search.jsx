import React from 'react';

function Search() {
    return (
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscador"
                    aria-label="Buscador"
                    aria-describedby="basic-addon1"
                    style={{ outline: 'none', boxShadow: 'none' }} // Desactiva el resaltado azul
                />
            </div>
        </div>
    );
}

export default Search;