
import './App.css'
import AddTodo from './componenets/AddTodo'
import EditorComponent from './componenets/Editor'
import Todos from './componenets/Todos'

function App() {

  return (
    <>
      <h1 className='text-white text-4xl'>Redux Toolkit</h1>
      {/* <EditorComponent /> */}
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
