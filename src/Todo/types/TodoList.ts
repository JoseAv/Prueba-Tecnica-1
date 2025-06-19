export interface InterfaceTodo {
    id: string
    titulo: string
    descripcion: string
    edit: boolean
    completed: boolean
}

export const Initialtodos: InterfaceTodo[] = [
    {
        id: "1",
        titulo: "Comprar víveres",
        descripcion: "Leche, huevos, pan y frutas",
        edit: false,
        completed: false
    },
    {
        id: "2",
        titulo: "Hacer ejercicio",
        descripcion: "30 minutos de cardio",
        edit: false,
        completed: true
    },
    {
        id: "3",
        titulo: "Llamar al médico",
        descripcion: "Pedir cita para chequeo anual",
        edit: true,
        completed: false
    },
    {
        id: "4",
        titulo: "Terminar proyecto",
        descripcion: "Completar la documentación del código",
        edit: false,
        completed: false
    },
    {
        id: "5",
        titulo: "Leer libro",
        descripcion: "Avanzar 2 capítulos de 'Cien años de soledad'",
        edit: false,
        completed: true
    }
]; 