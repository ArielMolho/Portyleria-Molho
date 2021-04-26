import React from 'react'
import {Link} from 'react-router-dom';

export default function CategoryButtons() {
    return (
        <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products`} className="link-text">Todos</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/alfajor`} className="link-text">Alfajores</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/muffin`} className="link-text">Muffins</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/cookie`} className="link-text">Cookies</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/scon`} className="link-text">Scons</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/pasta-frola`} className="link-text">Pasta Frolas</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                    <Link to={`/products/porty-box`} className="link-text">Porty Box</Link>
                </button>
            </div>
        </div>
    )
}
