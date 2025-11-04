import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Routes>
          {/* Rota da Home */}
          <Route path="/" element={<Home />} />
          
          {/* Rota de Autenticação (Login/Register) */}
          <Route path="/auth" element={<Auth />} />
          
          {/* Rota 404 - Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
