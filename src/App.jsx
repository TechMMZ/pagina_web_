import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QRGenerator from './QRGenerator';
import RegisterForm from './RegisterForm';

const App = () => {
  return (
    <Router>
      {/* <nav style={{ textAlign: 'center', padding: '20px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Ver QR</Link>
        <Link to="/registro">Formulario</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/registro" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
