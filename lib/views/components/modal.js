import React from 'react';

const ViewModal = ((props) => {
  if (props.show) {
    return (
      <div className="modal-overlay">
        <div className="modal-dialog">
          <div className="modal-header">
            <span className="title"><i className="fa fa-trello" />{props.title}</span>
            <span className="fa fa-times reset-link" onClick={props.onClose}></span></div>
          <div className="modal-content">
            {props.children}
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
});

ViewModal.displayName = 'ViewModal';

export default ViewModal;
