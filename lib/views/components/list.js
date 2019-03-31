import React from 'react';
import AddItem from './addItem';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ListItem = ((props) => {
    return <div className="list-container" onDragOver={e => props.onDragOver(e)}
                onDrop={e => props.onDrop(e, props.list.id)} >
    <div className="list-head">
      <div className="list-title" contentEditable onInput={e => console.log('list', e)}>
        {props.list.name}
      </div>
      <span className="fa fa-trash-o delete-link" aria-hidden="true"
            onClick={e => props.dispatch(actions.deleteList(props.list))}></span>
    </div>
    { 
      props.cards && props.cards.map((item) => <div className="item-container" key={item.id}
        draggable onDragStart={e => props.onDragStart(e, item.id)} onClick={e => props.onItemClick(item)}>
        {item.name}
      </div>)
    }
    <div className="add-item">
      <AddItem onItemAdd={item => props.dispatch(actions.addCard({item, category: props.list.id}))} 
              hasActiveList={props.cards && props.cards.length} />
    </div>
  </div>
});

ListItem.displayName = 'ListItem';

export default connect()(ListItem);
