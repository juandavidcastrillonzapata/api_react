const Home = () => {
    return (
        <div style={styles.container}>
        <h1>Bienvenido a la App de Tareas</h1>
        <p>Gestiona tus tareas de manera eficiente</p>
        <div style={styles.features}>
            <div style={styles.feature}>
            <h3>📝 Crear Tareas</h3>
            <p>Agrega nuevas tareas con formularios controlados</p>
            </div>
            <div style={styles.feature}>
            <h3>✅ Completar Tareas</h3>
            <p>Marca tareas como completadas o pendientes</p>
            </div>
            <div style={styles.feature}>
            <h3>🗑️ Eliminar Tareas</h3>
            <p>Elimina tareas que ya no necesites</p>
            </div>
        </div>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center'
    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '3rem'
    },
    feature: {
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px'
    }
}

export default Home
