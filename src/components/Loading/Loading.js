import React from 'react'

export default function Loading() {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <div className="spinner-border text-danger" role="status"></div>
            <div className="loading-text">
				<strong>Cargando...</strong>
			</div>
        </div>
    )
}