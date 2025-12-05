# Todo App - Gestión de Tareas con React
Aplicación web para gestión de tareas construida con React, React Router v6 y consumo de API REST. Este proyecto implementa todas las funcionalidades requeridas para la actividad GA1-220501096-03-AA1-EV10.

-Características Principales
-Funcionalidades Implementadas
-Navegación entre páginas con React Router v6

-Crear nuevas tareas con formularios controlados

-Listar tareas existentes desde JSONPlaceholder API

-Marcar como completado/pendiente en tiempo real

-Eliminar tareas con confirmación

-Validación básica de formularios (campos requeridos, longitud mínima)

-Estados de carga con spinner animado

-Manejo básico de errores con try/catch

-Persistencia local con localStorage

-Reto (Placeholders Implementados)
-Editar tareas (botón implementado, funcionalidad pendiente)

-Filtros por estado (sección de estadísticas implementada)

# Estructura del Proyecto

todo-app/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Navbar.jsx          # Barra de navegación con enlaces activos
│   │   ├── Todos/
│   │   │   ├── TodoList.jsx        # Lista completa de tareas
│   │   │   ├── TodoForm.jsx        # Formulario para crear nuevas tareas
│   │   │   └── TodoItem.jsx        # Componente individual de tarea (con ✏️ placeholder)
│   │   └── Shared/
│   │       ├── LoadingSpinner.jsx  # Indicador de carga animado
│   │       └── ErrorMessage.jsx    # Componente para mostrar errores
│   ├── pages/
│   │   ├── Home.jsx                # Página de inicio (/) - Presentación
│   │   ├── TodosPage.jsx           # Página de tareas (/todos) - CRUD completo
│   │   └── RegisterPage.jsx        # Página de registro (/registro) - Formulario
│   ├── services/
│   │   └── api.js                  # Servicios para API y localStorage
│   ├── App.jsx                     # Configuración de rutas principal
│   └── main.jsx                    # Punto de entrada de la aplicación
├── package.json                    # Dependencias y scripts
└── README.md                       # Esta documentación

# Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.x | Biblioteca principal para la UI |
| **React Router DOM** | 6.x | Navegación entre páginas |
| **Axios** | 1.x | Peticiones HTTP a APIs REST |
| **Vite** | 4.x | Bundler y entorno de desarrollo |
| **JSONPlaceholder API** | - | API REST para datos de prueba |
| **LocalStorage** | - | Persistencia de datos en navegador |
| **CSS Modules** | - | Estilos modularizados |

# Instalación y Ejecución

## 1. Clonar el repositorio

git clone https://github.com/tu-usuario/todo-app.git
cd todo-app

## 2. Instalar dependencias

npm install

## 3. Ejecutar en modo desarrollo

npm run dev

## 4. Construir para producción

npm run build

## 5. Previsualizar build de producción

npm run preview

