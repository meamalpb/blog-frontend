import '../styles/App.css';
import NavBar from './AppBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
