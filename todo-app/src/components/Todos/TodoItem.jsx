const TodoItem = ({ todo, onToggle, onDelete }) => {
    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
        })
    }

    return (
        <div style={{
        ...styles.container,
        backgroundColor: todo.completed ? '#d4edda' : '#fff',
        borderLeft: `4px solid ${todo.completed ? '#28a745' : '#007bff'}`
        }}>
        <div style={styles.content}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            style={styles.checkbox}
            />
            <div style={styles.text}>
            <div style={styles.header}>
                <h3 style={{
                ...styles.title,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#6c757d' : '#333'
                }}>
                {todo.title}
                </h3>
                <span style={{
                ...styles.statusBadge,
                backgroundColor: todo.completed ? '#28a745' : '#ffc107',
                color: todo.completed ? 'white' : '#212529'
                }}>
                {todo.completed ? '✅ Completada' : '⏳ Pendiente'}
                </span>
            </div>
            
            {/* Información adicional */}
            <div style={styles.metaInfo}>
                {todo.createdAt && (
                <span style={styles.date}>
                    📅 Creada: {formatDate(todo.createdAt)}
                </span>
                )}
                {todo.updatedAt && (
                <span style={styles.date}>
                    ✏️ Actualizada: {formatDate(todo.updatedAt)}
                </span>
                )}
            </div>
            </div>
        </div>
        
        <div style={styles.actions}>
            <button
            onClick={() => onDelete(todo.id)}
            style={styles.deleteButton}
            title="Eliminar tarea"
            >
            🗑️
            </button>
        </div>
        </div>
    )
}

const styles = {
    container: {
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        padding: '1.2rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    },
    content: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        flex: 1
    },
    checkbox: {
        transform: 'scale(1.3)',
        marginTop: '0.3rem',
        cursor: 'pointer'
    },
    text: {
        flex: 1
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.5rem'
    },
    title: {
        margin: 0,
        fontSize: '1.1rem',
        flex: 1,
        transition: 'all 0.3s ease'
    },
    statusBadge: {
        padding: '0.3rem 0.8rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginLeft: '1rem',
        whiteSpace: 'nowrap'
    },
    metaInfo: {
        display: 'flex',
        gap: '1rem',
        fontSize: '0.85rem',
        color: '#6c757d'
    },
    date: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem'
    },
    actions: {
        display: 'flex',
        gap: '0.5rem'
    },
    deleteButton: {
        backgroundColor: '#ffebee',
        color: '#d32f2f',
        border: 'none',
        padding: '0.6rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
    }
}

export default TodoItem