import React from 'react';

class AddList extends React.Component {
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
      this.props.onListAdd(this.state.inputValue);
      this.setState({
        inputValue: '',
        showAddBox: false
      })
    }
  }

  onInputChange = ev => {
    this.setState({
      inputValue: ev.target.value
    });
  }

	render () {
		return(
			<div className="add-list" >
				{
					this.state.showAddBox
					? <div className="list-container">
						  <input autoFocus className="list-input" placeholder="Add a list..." onChange={this.onInputChange} value={this.state.value}/>
              <button className="btn btn-save" onClick={this.onSaveClick}>Add List</button>
              <span className="reset-link fa fa-times" onClick={this.hideAddLink}></span>
					  </div>
          : <div className="add-list-link" onClick={this.showAddLink}> 
              { this.props.hasActiveList ? '+ Add Another List' : '+ Add A List' }
            </div>
				}
		</div>);
	}
};

AddList.displayName = 'AddList';

export default AddList;