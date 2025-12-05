const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div style={styles.container}>
        <p style={styles.message}>❌ {message}</p>
        {onRetry && (
            <button onClick={onRetry} style={styles.button}>
            Reintentar
            </button>
        )}
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: '1rem',
        borderRadius: '4px',
        margin: '1rem 0',
        textAlign: 'center'
    },
    message: {
        margin: '0 0 1rem 0'
    },
    button: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
    }
}

export default ErrorMessage
