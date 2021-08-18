new Vue({
  el: '#app',
  data: {
    todos: [],
    userInput: '', 
    addArticle : '00.00',
    addTaxe: '20',
    active: false,
    show: true,
    isEditing: false,
    newTodoDescription: "",
  },
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    addTodo() {
      const newTodo = { 
        id: _.uniqueId(), 
        value: this.userInput 
      };
      this.todos.push(newTodo);
    },
    removeTodo: function(todo){
      const index = _.findIndex(this.todos, todo);
      this.todos.splice(index, 1);
    },

    // updateTodo: function(todo) {
    //   const updateTodo = { 
    //     id: _.findIndex(this.todos, todo),
    //     value: this.userInput 
    //   };
    //   this.todos.splice(updateTodo);
    // },
    
    
    updateTodo() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },

    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    }
  

    

    // updateTodo() {
    //   axios.get('https://jsonplaceholder.typicode.com/todo/1').then(response => this.todos = response.data).catch(erreur => this.todos = [{title: 'Erreur de chargement'}]);
    // },
    // addTodo() {
    //   axios.post('https://jsonplaceholder.typicode.com/todos',{
    //     article: "56",
    //     title: 'LKJHGHJ'
    //   }).then(value => console.log(value))      
    // },

    
  },
  // computed: {
  //   // const result = 100 + (100 / 100) * 20;
  //   // console.log(result)
  // },
});