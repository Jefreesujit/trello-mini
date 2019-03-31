import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AddItem extends React.Component {
	constructor () {
    super();
		this.state = {
			showAddBox: false,
			inputValue: ''
		}
	}

	showAddLink = () => {
		this.setState({
      showAddBox: true
    });
  };
  
	hideAddLink = () => {
		this.setState({
      showAddBox: false
    });
  };
  
  onSaveClick = () => {
    if (this.state.inputValue !== '') {
      this.props.onItemAdd(this.state.inputValue);
      this.setState({
        inputValue: '',
        showAddBox: false
      });
    }
  }

  onInputChange = ev => {
    this.setState({
      inputValue: ev.target.value
    });
  }

	render () {
		return(
			<div className="add-item" >
				{
					this.state.showAddBox
					? <div className="add-list-section">
						  <textarea autoFocus className="list-input" onChange={this.onInputChange} placeholder="Enter a title for this card..." value={this.state.value}/>
              <button className="btn btn-save" onClick={this.onSaveClick}>Add Card</button>
              <span className="reset-link fa fa-times" onClick={this.hideAddLink}></span>
					  </div>
          : <a className="add-card-link" onClick={this.showAddLink}> 
              { this.props.hasActiveList ? '+ Add Another Card' : '+ Add Card' }
            </a>
				}
		</div>);
	}
};

AddItem.displayName = 'AddItem';

export default AddItem;