// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer'; // Footer 컴포넌트 임포트

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer는 항상 페이지 하단에 위치 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;  // 여기서 App을 default로 export해야 합니다.
