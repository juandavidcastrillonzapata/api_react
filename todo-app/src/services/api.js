import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const STORAGE_KEY = 'todo-app-tasks'

export const todoApi = {
  async getAll() {
    try {
      // Intentar obtener del localStorage primero
      const storedTodos = localStorage.getItem(STORAGE_KEY)
      if (storedTodos) {
        return JSON.parse(storedTodos)
      }
      
      // Si no hay en localStorage, usar datos iniciales en español
      const initialTodos = [
        { id: 1, title: "Comprar leche y pan en el supermercado", completed: false },
        { id: 2, title: "Terminar el proyecto de React Router", completed: true },
        { id: 3, title: "Llamar al médico para programar cita", completed: false },
        { id: 4, title: "Hacer ejercicio por 30 minutos", completed: true },
        { id: 5, title: "Leer 20 páginas del libro de programación", completed: false },
        { id: 6, title: "Preparar presentación para la reunión de mañana", completed: false },
        { id: 7, title: "Limpiar y ordenar el apartamento", completed: true },
        { id: 8, title: "Aprender a usar useEffect en React", completed: false },
        { id: 9, title: "Planificar las vacaciones de fin de año", completed: false },
        { id: 10, title: "Revisar y responder correos importantes", completed: true }
      ]
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTodos))
      return initialTodos
      
    } catch (error) {
      throw new Error('Error al obtener las tareas')
    }
  },

  async create(todo) {
    try {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
      
      const newTodo = {
        id: Date.now(), 
        title: todo.title,
        completed: todo.completed || false,
        createdAt: new Date().toISOString()
      }
      
      const updatedTodos = [newTodo, ...todos]
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos))
      
      return newTodo
      
    } catch (error) {
      throw new Error('Error al crear la tarea')
    }
  },

  async update(id, updates) {
    try {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
      const updatedTodos = todos.map(todo => 
        todo.id === id ? { ...todo, ...updates, updatedAt: new Date().toISOString() } : todo
      )
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos))
      return updatedTodos.find(todo => todo.id === id)
      
    } catch (error) {
      throw new Error('Error al actualizar la tarea')
    }
  },

  async delete(id) {
    try {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
      const updatedTodos = todos.filter(todo => todo.id !== id)
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos))
      return id
      
    } catch (error) {
      throw new Error('Error al eliminar la tarea')
    }
  }
}
