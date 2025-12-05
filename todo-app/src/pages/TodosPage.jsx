import { useState, useEffect } from 'react'
import TodoList from '../components/Todos/TodoList'
import TodoForm from '../components/Todos/TodoForm'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import ErrorMessage from '../components/Shared/ErrorMessage'
import { todoApi } from '../services/api'

const TodosPage = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [creating, setCreating] = useState(false)

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
        setLoading(true)
        setError(null)
        const data = await todoApi.getAll()
        setTodos(data)
        } catch (err) {
        setError(err.message)
        } finally {
        setLoading(false)
        }
    }

    const handleCreateTodo = async (newTodo) => {
        try {
        setCreating(true)
        const createdTodo = await todoApi.create(newTodo)
        setTodos([createdTodo, ...todos])
        setError(null)
        
        setTimeout(() => {
            const successMsg = document.createElement('div')
            successMsg.textContent = '✅ Tarea creada exitosamente!'
            successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            `
            document.body.appendChild(successMsg)
            setTimeout(() => successMsg.remove(), 3000)
        }, 100)
        
        } catch (err) {
        setError(err.message)
        } finally {
        setCreating(false)
        }
    }

    const handleToggleTodo = async (id) => {
        try {
        const todo = todos.find(t => t.id === id)
        const updatedTodo = await todoApi.update(id, {
            completed: !todo.completed
        })
        setTodos(todos.map(t => t.id === id ? updatedTodo : t))
        } catch (err) {
        setError(err.message)
        }
    }

    const handleDeleteTodo = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        try {
            await todoApi.delete(id)
            setTodos(todos.filter(todo => todo.id !== id))
            
            setTimeout(() => {
            const successMsg = document.createElement('div')
            successMsg.textContent = '🗑️ Tarea eliminada!'
            successMsg.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #dc3545;
                color: white;
                padding: 1rem;
                border-radius: 5px;
                z-index: 1000;
                animation: slideInRight 0.3s ease;
            `
            document.body.appendChild(successMsg)
            setTimeout(() => successMsg.remove(), 3000)
            }, 100)
            
        } catch (err) {
            setError(err.message)
        }
        }
    }

    const handleClearAll = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar TODAS las tareas?')) {
        localStorage.removeItem('todo-app-tasks')
        setTodos([])
        fetchTodos() 
        }
    }

    return (
        <div style={styles.container}>
        <h1 style={styles.title}>📋 Gestión de Tareas</h1>
        
        <div style={styles.statsBar}>
            <span>Total: {todos.length} tareas</span>
            <span>✅ Completadas: {todos.filter(t => t.completed).length}</span>
            <span>⏳ Pendientes: {todos.filter(t => !t.completed).length}</span>
            <button 
            onClick={handleClearAll}
            style={styles.clearButton}
            title="Reiniciar a tareas iniciales"
            >
            🔄 Reiniciar
            </button>
        </div>
        
        <TodoForm 
            onSubmit={handleCreateTodo} 
            loading={creating}
        />
        
        {error && (
            <ErrorMessage 
            message={error} 
            onRetry={fetchTodos}
            />
        )}
        
        {loading ? (
            <LoadingSpinner />
        ) : todos.length === 0 ? (
            <div style={styles.emptyState}>
            <h3>🎉 ¡No hay tareas pendientes!</h3>
            <p>Crea tu primera tarea usando el formulario de arriba.</p>
            </div>
        ) : (
            <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            />
        )}
        
        {/* Nota sobre persistencia */}
        <div style={styles.note}>
            <small>
            💾 <strong>Nota:</strong> Tus tareas se guardan automáticamente en tu navegador. 
            No se perderán al recargar la página.
            </small>
        </div>
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem'
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#333'
    },
    statsBar: {
        backgroundColor: '#e9ecef',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
    },
    clearButton: {
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    emptyState: {
        textAlign: 'center',
        padding: '3rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        marginTop: '2rem'
    },
    note: {
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        borderLeft: '4px solid #007bff'
    }
}

export default TodosPage