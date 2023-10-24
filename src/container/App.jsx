import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '../templates/SHOP/Shop';
import Admin from '../templates/HomeAdmin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
