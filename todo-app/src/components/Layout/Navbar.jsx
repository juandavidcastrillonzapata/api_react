import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav style={styles.nav}>
            <ul style={styles.navList}>
            <li>
                <Link to="/" style={styles.link}>Inicio</Link>
            </li>
            <li>
                <Link to="/todos" style={styles.link}>Tareas</Link>
            </li>
            <li>
                <Link to="/registro" style={styles.link}>Registro</Link>
            </li>
            </ul>
        </nav>
        <main style={styles.main}>
            <Outlet />
        </main>
        </>
    )
}

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '1rem',
        marginBottom: '2rem'
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem'
    },
    main: {
        padding: '0 2rem'
    }
}

export default Navbar
