import './App.css'
import { PageList } from './Todo/page/PageList'
import { Initialtodos } from './Todo/types/TodoList'

function App() {

  return (
    <>
      <PageList initialTodo={Initialtodos} />
    </>
  )
}

export default App
