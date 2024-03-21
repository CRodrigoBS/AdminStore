import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalProducts({ show, handleClose }) {
    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingrese los datos del producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="nameProduct">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="nameProduct">
                                <Form.Label>Precio del producto</Form.Label>
                                <Form.Control
                                    type="number"
                                />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Seleccione una imagen</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="descriptionProduct"
                            >
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Guardar Producto
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default ModalProducts;