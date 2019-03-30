import React from 'react';

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
    this.props.onItemAdd(this.state.inputValue);
    this.setState({
      inputValue: '',
      showAddBox: false
    })
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
						  <input autoFocus className="list-input" onChange={this.onInputChange} value={this.state.value}/>
              <button className="btn btn-additem" onClick={this.onSaveClick}>Add Card</button>
              <span className="reset-link" onClick={this.hideAddLink}>X</span>
					  </div>
          : <div className="addListLink" onClick={this.showAddLink}> + Add Card </div>
				}
		</div>);
	}
};

AddItem.displayName = 'AddItem';

export default AddItem;