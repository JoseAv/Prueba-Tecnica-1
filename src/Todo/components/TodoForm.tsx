import { useActionState, type FC } from "react"
import type { InterfaceTodo } from "../types/TodoList"

const AccionFrom = (setPageList: React.Dispatch<React.SetStateAction<InterfaceTodo[]>>, todo: InterfaceTodo | null) =>
    async (previousState: unknown, formData: FormData) => {
        const titulo = formData.get('titulo') as string
        const descripcion = formData.get('descripcion') as string
        const newTodo: InterfaceTodo = {
            id: crypto.randomUUID(),
            titulo,
            descripcion,
            edit: false,
            completed: false
        }
        if (todo) {
            setPageList(prev => {
                return prev.length === 0 ? []
                    :
                    prev.map((ele) => {
                        if (ele.id === todo.id) {
                            return { ...ele, titulo, descripcion }
                        }
                        return ele
                    })
            })
            return
        }

        setPageList(prev => {
            return prev.length === 0 ? [newTodo] : [...prev, newTodo]
        })
    }

interface TypeForm {
    setPageList: React.Dispatch<React.SetStateAction<InterfaceTodo[]>>
    todo?: InterfaceTodo | null
}

export const TodoForm: FC<TypeForm> = ({ setPageList, todo = null }) => {
    const [error, submitAction, isPending] = useActionState(AccionFrom(setPageList, todo), null)
    console.log(error)

    return (
        <>
            {todo ?
                <h3>Editando a {todo.id}</h3>
                : null}
            <form
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                action={submitAction}>
                <input type="text" placeholder="Jose,Pedro, ..." name="titulo" defaultValue={todo?.titulo ?? ''} />
                <input type="text" placeholder="Jose,Pedro, ..." name="descripcion" defaultValue={todo?.descripcion ?? ''} />
                <button disabled={isPending}>Enviar</button>
            </form>
        </>
    )

}