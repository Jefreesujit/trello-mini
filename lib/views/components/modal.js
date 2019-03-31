import React from 'react';

const Modal = ((props) => {
  if (props.showModal) {
    return (
      <div className="modal-overlay">
        <div className="modal-dialog">
          <div className="modal-header">
            <span className="title">{props.title}</span><span className="fa fa-times reset-link"></span></div>
          <div className="modal-content">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
});

export default Modal;
