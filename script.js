
const app = new Vue({

  el: "#app",

  data: {
    toDoList: [

      {
        text: "Ripassare CSS",
        done: false,
        category: "css"
      },

      {
        text: "Studiare logica di programmazione",
        done: false,
        category: "logica"
      },

      {
        text: "Approfondire keyUp",
        done: false,
        category: "sintassi"
      }

    ],

    newToDoItem: {
        text: "",
        done: false,
        category: ""
    }
  
  },

  methods: {

    taskDone(index){
      this.toDoList[index].done = !this.toDoList[index].done
    },

    addItem(){

      if (this.newToDoItem.text.length < 2) {
        alert("Inserisci una vera task pappamolla")
      } else{
        this.toDoList.push(this.newToDoItem);
        this.newToDoItem = {
          text: "",
          done: false,
          category: ""
        };
      }

    },

    deleteItem(index){
      if (confirm("Sei sicuro di voler eliminare questa task?")){
        this.toDoList.splice(index, 1);
      }
    }
  }

});