import { useState } from 'react'

const TodoForm = ({ onSubmit, loading }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validación básica
    if (!title.trim()) {
        setError('El título es requerido')
        return
        }

        if (title.length < 3) {
        setError('El título debe tener al menos 3 caracteres')
        return
        }

        onSubmit({ title, completed: false })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
        <h3>Crear Nueva Tarea</h3>
        
        <div style={styles.inputGroup}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe una nueva tarea..."
            style={styles.input}
            disabled={loading}
            />
            <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
            >
            {loading ? 'Creando...' : 'Agregar Tarea'}
            </button>
        </div>
        
        {error && <p style={styles.error}>{error}</p>}
        </form>
    )
}

const styles = {
    form: {
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem'
    },
    inputGroup: {
        display: 'flex',
        gap: '1rem'
    },
    input: {
        flex: 1,
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem'
    },
    button: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem'
    },
    error: {
        color: '#dc3545',
        marginTop: '0.5rem'
    }
}

export default TodoForm
