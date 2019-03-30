import React from 'react';
import AddItem from './addItem';

const ListItem = ((props) => {
    return  <div
    className="drop-area"
    onDragOver={e => props.onDragOver(e)}
    onDrop={e => props.onDrop(e, props.name)}
  >
    <h1>{props.name}</h1>
    { 
      props.tasks && props.tasks.map((item) => <div className="item-container" key={item.name}
        draggable onDragStart={e => props.onDragStart(e, item.name)}>
        {item.name}
      </div>)
    }
    <div className="add-item">
      <AddItem onItemAdd={val => props.onItemAdd(val, props.name)}/>
    </div>
  </div>
});

ListItem.displayName = 'ListItem';

export default ListItem;