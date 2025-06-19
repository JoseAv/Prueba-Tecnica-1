import type { InterfaceTodo } from "../types/TodoList"

export const TodoItems = ({ todo, CompletarTodo, EliminarTarea, setEditTodo }: {
    todo: InterfaceTodo,
    CompletarTodo: (todo: InterfaceTodo) => void,
    EliminarTarea: (todo: InterfaceTodo) => void,
    setEditTodo: (todo: InterfaceTodo) => void
}) => {
    if (!todo) return null

    return (
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '600px' }}>
            <h3><strong>Titulo:</strong> {todo.titulo}</h3>
            <p><strong>Descripcion</strong> {todo.descripcion}</p>
            <button onClick={() => setEditTodo(todo)}>Editar</button>
            <button onClick={() => EliminarTarea(todo)}>Eliminar</button>
            <button onClick={() => CompletarTodo(todo)}><strong>Completado:</strong> {todo.completed ? '✅' : '❌'}</button>
        </div>


    )



}