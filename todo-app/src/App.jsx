import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Navbar'
import Home from './pages/Home'
import TodosPage from './pages/TodosPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="registro" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App