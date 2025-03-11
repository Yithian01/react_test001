import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import ProblemArticle from './pages/ProblemArticle/ProblemArticle'; // ProblemArticle 컴포넌트 import
import ProblemDetail from './components/ProblemDetail/ProblemDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* 네비바 컴포넌트 */}
        <Routes> {/* Switch -> Routes로 변경 */}
          <Route path="/" element={<Main />} /> {/* 메인 화면 */}
          <Route path="/problems" element={<ProblemArticle />} /> {/* 문제 리스트 페이지 */}
          <Route path="/problem/:problemId" element={<ProblemDetail />} /> {/* 문제 세부 페이지 */}
        </Routes>
        <Footer /> {/* 하단 Footer 컴포넌트 */}
      </div>
    </Router>
  );
}

export default App;
