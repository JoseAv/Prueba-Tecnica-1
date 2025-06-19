import { useState } from "react"
import type { InterfaceTodo } from "../types/TodoList"
import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"

export const PageList = ({ initialTodo }: { initialTodo: InterfaceTodo[] }) => {
    const [todos, setPageList] = useState<[] | InterfaceTodo[]>(initialTodo)
    const [editTodo, setEditTodo] = useState<InterfaceTodo | null>(null)

    const CompletarTodo = (todo: InterfaceTodo) => {
        const newTodo = [...todos]
        const IndexArray = newTodo.findIndex((ele) => ele.id === todo.id)
        if (IndexArray === -1) return
        newTodo[IndexArray].completed = !newTodo[IndexArray].completed
        setPageList(newTodo)
    }

    const EliminarTarea = (todo: InterfaceTodo) => {
        const newTodo = [...todos]
        const IndexArray = newTodo.findIndex((ele) => ele.id === todo.id)
        console.log(IndexArray)
        if (IndexArray === -1) return
        newTodo.splice(IndexArray, 1)
        setPageList(newTodo)
    }

    return (<div style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '30px' }}>

        <TodoForm setPageList={setPageList} />
        <TodoList todos={todos} EliminarTarea={EliminarTarea} CompletarTodo={CompletarTodo} setEditTodo={setEditTodo} />
        {
            editTodo ?
                <TodoForm setPageList={setPageList} todo={editTodo}></TodoForm>
                :
                null
        }

    </div>)



}
