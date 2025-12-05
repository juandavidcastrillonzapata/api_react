import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.nombre.trim()) {
        newErrors.nombre = 'El nombre es requerido'
        }
        
        if (!formData.email.trim()) {
        newErrors.email = 'El email es requerido'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido'
        }
        
        if (!formData.password) {
        newErrors.password = 'La contraseña es requerida'
        } else if (formData.password.length < 6) {
        newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
        }
        
        return newErrors
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
        ...formData,
        [name]: value
        })
        // Limpiar error cuando el usuario escribe
        if (errors[name]) {
        setErrors({
            ...errors,
            [name]: ''
        })
        }
    }

const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length === 0) {
        console.log('Datos del formulario:', formData)
        setSubmitted(true)
        setTimeout(() => {
            navigate('/todos')
        }, 2000)
        } else {
        setErrors(formErrors)
        }
    }

    return (
        <div style={styles.container}>
        <h1>📝 Formulario de Registro</h1>
        
        {submitted ? (
            <div style={styles.success}>
            <h3>¡Registro exitoso!</h3>
            <p>Redirigiendo a la página de tareas...</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                style={styles.input}
                />
                {errors.nombre && <span style={styles.error}>{errors.nombre}</span>}
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                />
                {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="password">Contraseña:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                />
                {errors.password && <span style={styles.error}>{errors.password}</span>}
            </div>

            <button type="submit" style={styles.button}>
                Registrarse
            </button>
            </form>
        )}
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '2rem'
    },
    form: {
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px'
    },
    formGroup: {
        marginBottom: '1.5rem'
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem'
    },
    error: {
        color: '#dc3545',
        fontSize: '0.875rem',
        marginTop: '0.25rem',
        display: 'block'
    },
    button: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '1rem'
    },
    success: {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center'
    }
}

export default RegisterPage