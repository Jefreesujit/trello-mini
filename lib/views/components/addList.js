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
    this.props.onListAdd(this.state.inputValue);
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
			<div className="add-list drop-area" >
				{
					this.state.showAddBox
					? <div className="add-list-section">
						  <input autoFocus className="list-input" onChange={this.onInputChange} value={this.state.value}/>
              <button className="btn btn-addlist" onClick={this.onSaveClick}>Add List</button>
              <span className="reset-link" onClick={this.hideAddLink}>X</span>
					  </div>
          : <div className="addListLink" onClick={this.showAddLink}> + Add Another List </div>
				}
		</div>);
	}
};

AddList.displayName = 'AddList';

export default AddList;