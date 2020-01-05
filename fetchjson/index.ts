import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/2";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  logtodo(id,title,finished);
});

const logtodo = (id:number, title:string, finished:boolean) => {
  console.log(`values1: ${id} values2: ${title} values3: ${finished}`);
};
