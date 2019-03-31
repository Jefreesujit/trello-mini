'use strict';

import React from 'react';
import Page from '../components/page';
import { connect } from 'react-redux';
import List from '../components/list';
import AddList from '../components/addList';
import Modal from '../components/modal';

class Home extends React.Component {
  state = {
    tasks: [
      {
        name: "Add More Tasks",
        category: "todo",
        comments: []
      }
    ],
    list: ['todo', 'working', 'complete'],
    activeItem: {},
    showModal: false
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });
  };

  onListAdd = list => {
    this.setState({
      list: [
        ...this.state.list,
        list
      ]
    });
  };

  onItemAdd = (item, category) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { name: item, category: category, comments: [] }
      ]
    });
  };

  onListDelete = (ev, name) => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.category !== name),
      list: this.state.list.filter(list => list !== name)
    });
  };

  onItemClick = (item) => {
    this.setState({
      activeItem: item,
      showModal: true
    });
  }

  handleKeyPress = ev => {
    if ((ev.key == "Enter") && (ev.target.value != "")) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name: ev.target.value, category: "todo" }
        ]
      });
      ev.target.value = " ";
    }
  };

  renderList = (tasks) => {
    return this.state.list.map((item, index) => 
      <List tasks={tasks[item]} name={item} onDrop={this.onDrop} showModal={this.showModal}
            onDragOver={this.onDragOver} onItemAdd={this.onItemAdd} key={index}
            onDragStart={this.onDragStart} onDelete={this.onListDelete} />
    );
  }

  render () {
    let tasks = {};
    this.state.tasks.forEach(t => {
      tasks[t.category] = tasks[t.category] || []; 
      tasks[t.category].push(t);
    });
    const hasActiveList = Object.keys(tasks).length > 0

    return (
      <Page className="home-page" header="Trello">
        <div className="board-container">
          {this.renderList(tasks)}
          <AddList onListAdd={this.onListAdd} hasActiveList={hasActiveList} />
        </div>
        <Modal show={this.state.showModal} item={this.state.activeItem} />
      </Page>
    );
  }
}

Home.displayName = 'Home';

function select (state) {
  return {
    list: state.board.list
  };
}

export default connect(select)(Home);
