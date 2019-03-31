import React from 'react';

const Modal = ((props) => {
  if (props.showModal) {
    return (
      <div className="modal-overlay">
        <div className="modal-dialog">
          <div className="modal-header">
            <span className="title">{props.item.name}</span><span className="fa fa-times reset-link"></span></div>
          <div className="modal-content">
            <div className="description-section">
              <label>Description</label>
              <textarea className="list-input" className="Enter description... "></textarea>
              <button className="btn btn-save">Save</button>
            </div>
            <div className="comments-input-section">
              <label>Description</label>
              <textarea className="list-input" className="Enter comment "></textarea>
              <button className="btn btn-save">Save</button>
            </div>
            <div className="comments-render-section">
              {props.item.comments && props.item.comments.map(comment => <div className="comment-item">{comment}</div>)}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
});

export default Modal;
