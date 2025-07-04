import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venue from './pages/Venue'
import Agenda from './pages/Agenda'
import Access from './pages/Access'
import Travel from './pages/Travel'
import Appbar from './components/Appbar.jsx'

function App() {
  return (
    <Router>
      <Appbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/access" element={<Access />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/exhibition" element={<Agenda />} />
      </Routes>
    </Router>
  )
}

export default App
