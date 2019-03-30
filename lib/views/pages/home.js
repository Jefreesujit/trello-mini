'use strict';

import React from 'react';
import Page from '../components/page';
import { connect } from 'react-redux';
import List from '../components/list';
import AddList from '../components/addList';

class Home extends React.Component {
  state = {
    tasks: [
      {
        name: "Add More Tasks",
        category: "todo"
      }
    ],
    list: ['todo', 'working', 'complete']
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
        { name: item, category: category }
      ]
    });
  };

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
      <List tasks={tasks[item]} name={item} onDrop={this.onDrop} key={index}
      onDragOver={this.onDragOver} onItemAdd={this.onItemAdd} onDragStart={this.onDragStart} />
    );
  }

  render () {
    let tasks = {};
    this.state.tasks.forEach(t => {
      tasks[t.category] = tasks[t.category] || []; 
      tasks[t.category].push(t);
    });

    return (
      <Page className="home-page" header="Trello">
        <div id='background-image'></div>
        <div class="container">
          {this.renderList(tasks)}
          <AddList onListAdd={this.onListAdd} />
        </div>
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
