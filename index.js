new Vue({
  el: '#app',
  data: {
    userInput: '', 
    firstNumber : '',
    completed: null,
    newTaskName: '',
    tasklist: []
  },
  methods: {
    completeTask: function(task){
      task.completed = true;
    },
    newTask: function(){
      this.tasklist.push({description: this.newTaskName, completed: false, editing: false});
    },
    removeTask: function(task){
      this.tasklist.splice(this.tasklist.indexOf(task), 1);
    },
    editTask: function(task){
      task.editing = false;
    }
  }, /* End method */ 
  computed: {
    result: function(){
      return  this.firstNumber * (1+20/100);
    }
  },
});