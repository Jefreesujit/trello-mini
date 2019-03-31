import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EditItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      description: props.item.description,
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
    this.props.dispatch(actions.addComments({
      comment: this.state.comment,
      id: this.props.item.id
    }));

    this.setState({
      comment: ''
    });
  }

  addDescription = () => {
    this.props.dispatch(actions.addDescription({
      description: this.state.description,
      id: this.props.item.id
    }));

    this.setState({
      allowEdit: false
    });
  }

  toggleEdit = () => {
    this.setState({
      allowEdit: !this.state.allowEdit
    });
  }

  render () {
    return (
      <div className="edit-item-container">
        <div class="left-section">
          <div className="section description">
          <div class="icon-box"><i className="fa fa-bars"></i></div>
            <div className="content-box">
              <label className="input-label">Description</label>
              {
                this.props.item.description && !this.state.allowEdit
                ? <div className="description-content" onClick={this.toggleEdit}>{this.props.item.description}</div>
                : <Fragment><textarea className="list-input" onChange={this.descriptionHandler} placeholder="Enter description... " value={this.state.description} ></textarea>
                  <button className="btn btn-save" onClick={this.addDescription}>Save</button></Fragment>
              }
            </div>
          </div>
          <div className="section comments-input">
            <div className="icon-box"><i className="fa fa-comments-o"></i></div>
            <div className="content-box">
              <label className="input-label">Comments</label>
              <textarea className="list-input" placeholder="Enter comment " onChange={this.commentHandler} value={this.state.comment}></textarea>
              <button className="btn btn-save" onClick={this.addComment}>Save</button>
            </div>
          </div>
        </div>
        { this.props.item.comments.length ? 
          <div className="section comments-render">
          <div className="icon-box"><i className="fa fa-trello"></i></div>
            <div className="content-box">
              <label className="input-label">Activity</label>
              <div className="comments-list"> {this.props.item.comments.map(comment => <div className="comment-item">{comment}</div>)}</div>
            </div>
          </div> : null }
      </div>
    )
  }
}

EditItem.displayName = 'EditItem';

export default connect()(EditItem);
