import React, { useState } from 'react';

// import { Modal, Button, Form } from 'react-bootstrap';
import ModalProducts from '../components/modalProducts';
import FixedButtons from '../components/fixedButtons';
import Products from '../components/products';
import Filters from '../components/filters';
import Search from '../components/search';

function Catalog() {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleMouseDown = () => {
        setClicked(true);
    };

    const handleMouseUp = () => {
        setClicked(false);
    };

    const handleShow = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300); // Después de 300ms, regresa al color original
        setShow(true);
    };

    const handleClose = () => {
        setShow(false)
    };

    return (
        <div>
            <div className="mt-4"></div> {/* Espacio entre el navbar y los contenedores */}
            <div className="container">
                <div className="row">
                    <Search />
                </div>
                <div className="col-md-3">
                    {/* Contenedor de filtros */}
                    <h2>Filtros</h2>
                    {/* Aquí puedes colocar tus filtros */}
                </div>
                <div className="row">
                    <Filters />
                    <Products/>
                </div>
            </div>
            <FixedButtons
                setClicked={setClicked}
                handleShow={handleShow}
                handleMouseDown={handleMouseDown}
                handleMouseUp={handleMouseUp}
                clicked={clicked}
            />
            <ModalProducts show={show} handleClose={handleClose} />
        </div>

    );
}
export default Catalog;