new Vue({
  el: '#app',
  data: {
    // todos: [ {editing: false }],
    // todo: '',
    userInput: '', 
    addArticle : '00.00',
    active: false,
    firstNumber : '',
    addTaxe: '20',

    message: 'Tasks',
        completed: null,
        newTaskName: '',
        tasklist: [
            { description: 'Read', completed: true, editing: false },
            { description: 'Write', completed: true, editing: false  },
            { description: 'Edit', completed: false, editing: false  },
            { description: 'Publish', completed: false, editing: false  }
        ]
    





  },
  methods: {
    // addTodo() {
    //   const newTodo = { 
    //     id: _.uniqueId(), 
    //     value: this.userInput 
    //   };
    //   this.todos.push(newTodo);
    // },
    // removeTodo: function(todo){
    //   const index = _.findIndex(this.todos, todo);
    //   this.todos.splice(index, 1);
    // },

    // editTodo: function(todo){
    //   todo.editing = false;
    // }

    completeTask: function(task){
      task.completed = true;
  },
  newTask: function(){
      this.tasklist.push({description: this.newTaskName, completed: false, editing: false});
  },
  removeTask: function(task){
      this.tasklist.splice(this.tasklist.indexOf(task), 1);
      console.log(task);
  },
  editTask: function(task){
      task.editing = false;
      console.log(task);
  }


  }, /* End method */ 

  computed: {
    result: function(){
      return  this.firstNumber * (1+20/100);
    }
  },

});