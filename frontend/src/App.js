import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListHospedes from './pages/ListHospedes';
import CreateHospede from './pages/CreateHospede';
import UpdateHospede from './pages/UpdateHospede';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospedes" element={<ListHospedes />} />
          <Route path="/hospedes/novo" element={<CreateHospede />} />
          <Route path="/hospedes/editar/:id" element={<UpdateHospede />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;