import { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

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
