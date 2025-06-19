import type { InterfaceTodo } from "../types/TodoList"
import { TodoItems } from "./TodoItem"

export const TodoList = ({ todos, CompletarTodo, EliminarTarea, setEditTodo }: {
    todos: InterfaceTodo[],
    CompletarTodo: (todo: InterfaceTodo) => void,
    EliminarTarea: (todo: InterfaceTodo) => void,
    setEditTodo: (todo: InterfaceTodo) => void
}) => {

    return (
        <div>
            <h1>All Todos: </h1>
            <ul style={{ display: "flex", flexDirection: 'column', gap: '20px' }} >
                {!todos && <h1>No hay todos</h1>}
                {todos.map((todo) => {
                    return <li
                        style={{ listStyleType: 'none', border: '1px solid white', }}
                        key={todo.id}>
                        < TodoItems EliminarTarea={EliminarTarea} CompletarTodo={CompletarTodo} todo={todo} setEditTodo={setEditTodo} />
                    </li>
                })}
            </ul>
        </div>


    )



}