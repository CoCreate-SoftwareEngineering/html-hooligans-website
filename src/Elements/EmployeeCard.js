import React, { useState } from 'react';
import Modal from './Modal'


// Re-usable card for contact and info
function EmployeeCard({ cardTitle, cardText, email }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <>       
        <div className="card w-75" style={{ margin: '12px', maxWidth: '380px', backgroundColor: 'rgba(226, 133, 110, 0.9)', outlineColor: 'rgba(226, 133, 110, 0.8)', height: '350px', position: 'relative' }}>
            <div className="card-body">
                <h5 className="card-title" style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.1)' }}>{cardTitle}</h5>
                <p className="card-text" style={{ color: 'black', marginBottom: '50px' }}>{cardText}</p>
            </div>
            <div className="card-footer" style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px' }}>
                <button type="button" className="btn btn-primary" onClick={handleOpenModal} style={{ width: '100%' }}>Contact Me!</button>
            </div>
            <Modal show={showModal} onClose={handleCloseModal} contactEmail={email} />
        </div>
        </>
    );
}

export default EmployeeCard;
