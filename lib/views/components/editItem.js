import React, { Fragment } from 'react';

class EditItem extends React.Component {
  constructor() {
    super();

    this.state = {
      comment: '',
      description: '',
      allowEdit: false
    }

    this.commentHandler = ev => this.changeHandler(ev.target.value, 'comment');
    this.descriptionHandler = ev => this.changeHandler(ev.target.value, 'description');
  }

  changeHandler = (value, key) => {
    let state = {};
    state[key] = value;
    this.setState(state);
  }

  addComment = () => {
    this.props.dispatch(actions.addComment({
      comment: this.state.comment,
      card: this.props.item.id
    }));

    this.setState({
      comment: ''
    });
  }

  addDescription = () => {
    this.props.dispatch(actions.addDescription({
      comment: this.state.description,
      card: this.props.item.id
    }));

    this.setState({
      description: '',
      allowEdit: false
    });
  }

  toggleEdit = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    });
  }

  render () {
    return (
      <div className="edit-item-container">
        <div className="section description">
        <div class="icon-box"><i className="fa fa-bars"></i></div>
          <div className="content-box">
            <label className="input-label">Description</label>
            {
              this.props.item.description && !this.state.allowEdit
              ? <div className="description-content" onClick={this.toggleEdit}>{this.props.item.description}</div>
              : <Fragment><textarea className="list-input" onChange={this.descriptionHandler} placeholder="Enter description... "></textarea>
                <button className="btn btn-save" onClick={this.addDescription}>Save</button></Fragment>
            }
          </div>
        </div>
        <div className="section comments-input">
          <div className="icon-box"><i className="fa fa-comments-o"></i></div>
          <div className="content-box">
            <label className="input-label">Comments</label>
            <textarea className="list-input" placeholder="Enter comment " onChange={this.commentHandler}></textarea>
            <button className="btn btn-save" onClick={this.addComment}>Save</button>
          </div>
        </div>
        <div className="section comments-render">
        <div className="icon-box"><i className="fa fa-trello"></i></div>
          <div className="content-box">
            <label className="input-label">Comments</label>
            {this.props.item.comments && this.props.item.comments.map(comment => <div className="comment-item">{comment}</div>)}
          </div>
        </div>
      </div>
    )
  }
}

EditItem.displayName = 'EditItem';

export default EditItem;
