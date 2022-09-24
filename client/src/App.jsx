import './App.css'
import Dashboard from './pages/Dashboard'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <Router>
          <TopNav />
          <Routes>
            <Route path='/' element={<Dashboard />}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App
