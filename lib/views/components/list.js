import React from 'react';
import AddItem from './addItem';

const ListItem = ((props) => {
    return  <div
    className="list-container"
    onDragOver={e => props.onDragOver(e)}
    onDrop={e => props.onDrop(e, props.name)}
  >
    <div className="list-head">
      <div className="list-title" contentEditable onInput={e => console.log('list', e)}>{props.name}</div>
      <span className="fa fa-trash-o delete-link" aria-hidden="true" onClick={e => props.onDelete(e, props.name)}></span>
    </div>
    { 
      props.tasks && props.tasks.map((item) => <div className="item-container" key={item.name}
        draggable onDragStart={e => props.onDragStart(e, item.name)} onItemClick={e => props.showModal(item)}>
        {item.name}
      </div>)
    }
    <div className="add-item">
      <AddItem onItemAdd={val => props.onItemAdd(val, props.name)} hasActiveList={props.tasks && props.tasks.length} />
    </div>
  </div>
});

ListItem.displayName = 'ListItem';

export default ListItem;