import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
        <div style={styles.empty}>
            <p>No hay tareas registradas</p>
            <p>¡Crea tu primera tarea usando el formulario!</p>
        </div>
        )
    }

    return (
        <div style={styles.container}>
        <h2>Tus Tareas ({todos.length})</h2>
        <div style={styles.stats}>
            <span style={styles.stat}>
            Completadas: {todos.filter(t => t.completed).length}
            </span>
            <span style={styles.stat}>
            Pendientes: {todos.filter(t => !t.completed).length}
            </span>
        </div>
        <div style={styles.list}>
            {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
            />
            ))}
        </div>
        </div>
    )
}

const styles = {
    container: {
        marginTop: '2rem'
    },
    empty: {
        textAlign: 'center',
        padding: '3rem',
        color: '#666'
    },
    stats: {
        display: 'flex',
        gap: '2rem',
        marginBottom: '1.5rem'
    },
    stat: {
        backgroundColor: '#e9ecef',
        padding: '0.5rem 1rem',
        borderRadius: '4px'
    },
    list: {
        marginTop: '1rem'
    }
}

export default TodoList