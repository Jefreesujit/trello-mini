'use strict';

let state = {
  app: {
    current: {
      path: '/',
      pageTitle: 'Trello'
    }
  },
  board: {
    panels: {
      list: [{
        id: 1,
          name: 'todo'
        }, {
          id: 2,
          name: 'working'
        }, {
        id: 3,
        name: 'complete'
      }],
      counter: 3
    },
    tasks: {
      cards: [
        {
          id: 1,
          name: "Add More Tasks",
          category: 1,
          description: "",
          comments: [
            "Test Comment 1",
            "Test Comment 2"
          ]
        }
      ],
      counter: 1
    }
  }
};

export default state;
