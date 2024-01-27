import React from 'react';
import '../StyleSheets/Modal.css';

const Modal = ({ show, onClose, contactEmail }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Contact Form</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <label>Your Email:</label>
                <input type="email" placeholder="Enter your email" />
              </div>
  
              <div className="form-row">
                <label>Contact Email:</label>
                <input type="email" value={contactEmail} readOnly />
              </div>
  
              <div className="form-row">
                <label>Subject (optional):</label>
                <input type="text" placeholder="Enter subject" />
              </div>
  
              <div className="form-row">
                <label>Message:</label>
                <textarea 
                    placeholder="Enter your message" 
                    className="textarea-min-size"
                ></textarea>
              </div>
  
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  
export default Modal;
