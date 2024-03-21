import React, { useState, useEffect  } from 'react';
import { FaTrash, FaEdit, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';


const obtenerIdDelStaff = () => {
    return 1; 
};

//Productos
const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const staffId = obtenerIdDelStaff();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/product/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();  
    }, []);

//delete productos

const handleEditProduct = (productId) => {
    console.log(`Editando producto con ID: ${productId}`);
};

const handleDeleteProduct = async (productId) => {
    try {  
        await axios.delete(`http://127.0.0.1:8000/products/product/?product=${productId}&staff=${staffId}`);
        console.log('Product deleted successfully');
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};
//----------
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Cambiar a la siguiente página
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Cambiar a la página anterior
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="row row-cols-4 g-4">
                {currentProducts.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 product-card" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0}>
                        <img src={`http://127.0.0.1:8000${product.image}`} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                            </div>
                            <div className="card-overlay" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 1)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.9s' }}>
                                <div className="btn-group" role="group" aria-label="Botones de acción">
                                <button className="btn btn-primary d-flex align-items-center justify-content-center" style={{ marginRight: '10px' }} onClick={() => handleEditProduct(product.id)}>
                                        <FaEdit />
                                    </button>
                                    <button className="btn btn-success d-flex align-items-center justify-content-center" style={{ marginRight: '10px' }}>
                                        <FaEye />
                                    </button>
                                    <button className="btn btn-danger d-flex align-items-center justify-content-center" onClick={() => handleDeleteProduct(product.id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Controles de paginación */}
            <div className="pagination d-flex align-items-center justify-content-center" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <button className="pagination-btn" onClick={prevPage} disabled={currentPage === 1} style={{ backgroundColor: currentPage !== 1 ? '#9a66cd' : '#d8b3ff', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <FaChevronLeft />
                </button>
                <div>
                    Página {currentPage} de {Math.ceil(products.length / productsPerPage)}
                </div>
                <button className="pagination-btn" onClick={nextPage} disabled={indexOfLastProduct >= products.length} style={{ backgroundColor: indexOfLastProduct < products.length ? '#9a66cd' : '#d8b3ff', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
}

export default Products;
