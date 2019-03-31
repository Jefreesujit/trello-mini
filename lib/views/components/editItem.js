import React from 'react';

class EditItem extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="edit-item-container">
        <div className="description-section">
          <label>Description</label>
          <textarea className="list-input" className="Enter description... "></textarea>
          <button className="btn btn-save">Save</button>
        </div>
        <div className="comments-input-section">
          <label>Comments</label>
          <textarea className="list-input" className="Enter comment "></textarea>
          <button className="btn btn-save">Save</button>
        </div>
        <div className="comments-render-section">
          {this.props.item.comments && this.props.item.comments.map(comment => <div className="comment-item">{comment}</div>)}
        </div>
      </div>
    )
  }
}

EditItem.displayName = 'EditItem';

export default EditItem;