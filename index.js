new Vue({
  el: '#app',
  data: {
    todos: [],
    userInput: '', 
    addArticle : '00.00',
    addTaxe: '20',
    active: false,
    show: true,
  },
  methods: {
    addTodo() {
      const newTodo = { 
        id: _.uniqueId(), 
        value: this.userInput 
      };
      console.log(newTodo)
      this.todos.push(newTodo);
    },
    removeTodo: function(todo){
      const index = _.findIndex(this.todos, todo);
      this.todos.splice(index, 1);
    },
  },
  // computed: {
  //   // const result = 100 + (100 / 100) * 20;
  //   // console.log(result)
  // },
});











