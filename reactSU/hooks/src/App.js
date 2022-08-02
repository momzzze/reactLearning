import './App.css';
import { TaskList } from './components/TaskList';
import useFetch from './hooks/useFetch';
import CreateTask from './components/CreateTask';
import useTodosApi from './hooks/useTodosApi';
import { TaskContext } from './contexts/TaskContext';




function App() {


  const [tasks, setTasks, isLoading] = useFetch(`http://localhost:3030/jsonstore/todos`, [])
  const { removeTodo, createTodo, updateTodo } = useTodosApi();

  const taskCreateHandler = async (newTask) => {
    const createdTask = await createTodo(newTask)
    setTasks(state => [
      ...state,
      createdTask
    ])
  }

  const taskDeleteHandler = async (taksId) => {
    await removeTodo(taksId)
    setTasks(state => state.filter(x => x._id != taksId));
  }

  const toggleTask = async (task) => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };


    await updateTodo(task._id, updatedTask);
    setTasks(state => state.map(x => x._id == task._id ? { ...x, isCompleted: !x.isCompleted } : x))
  }

  const taskEditHandler = async (task, newTitle) => {
    const updatedTask = { ...task, title: newTitle }

    await updateTodo(task._id, updatedTask);
    setTasks(state => state.map(x => x._id == task._id ? { ...x, isCompleted: !x.isCompleted } : x))
  }

  return (
    <TaskContext.Provider value={{ tasks, taskDeleteHandler, toggleTask, taskEditHandler }}>

      <div className="App">
        <header>
          <h1>TODO App</h1>
        </header>
        <main>
          {isLoading
            ? <p>Loading</p>
            : <TaskList />
          }


          <CreateTask taskCreateHandler={taskCreateHandler} />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
