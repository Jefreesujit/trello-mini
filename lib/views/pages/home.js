'use strict';

import React from 'react';
import Page from '../components/page';
import { connect } from 'react-redux';
import List from '../components/list';
import AddList from '../components/addList';
import ViewModal from '../components/modal';
import EditItem from '../components/editItem';
import * as actions from '../../actions';

class Home extends React.Component {
  state = {
    activeItem: {},
    showModal: false
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  onDrop = (ev, category) => {
    const id = ev.dataTransfer.getData("id");
    this.props.dispatch(actions.moveCard({id, category}));
  };

  onItemClick = (item) => {
    this.setState({
      activeItem: item,
      showModal: true
    });
  }

  onModalClose = () => {
    this.setState({
      showModal: false
    });
  }

  renderList = (cards) => {
    return this.props.list.map((list, index) => 
      <List cards={cards[list.id]} list={list} onDrop={this.onDrop} 
            onDragOver={this.onDragOver} key={index} 
            onDragStart={this.onDragStart} onItemClick={this.onItemClick}/>
    );
  }

  render () {
    console.log(ViewModal);
    return (
      <Page className="home-page" header="Trello">
        <div className="board-container">
          {this.renderList(this.props.cards)}
          <AddList hasActiveList={this.props.hasActiveList} />
        </div>
        <ViewModal show={this.state.showModal} title="Add Item" onClose={this.onModalClose}>
          <EditItem item={this.state.activeItem} />
        </ViewModal>
      </Page>
    );
  }
}

Home.displayName = 'Home';

function select (state) {
  let cards = {};
  state.board.tasks.cards.forEach(t => {
    cards[t.category] = cards[t.category] || []; 
    cards[t.category].push(t);
  });

  return {
    list: state.board.panels.list,
    cards: cards,
    hasActiveList: Object.keys(cards).length > 0
  };
}

export default connect(select)(Home);
