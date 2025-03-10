import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-content">
      <Navbar />
      <div className="content">
        <h1>Welcome to MyApp</h1>
        <p>리눅스 명령어를 공부하는 백준 같은 사이트입니다. 다양한 문제를 풀면서 리눅스 명령어를 익히고, 실력을 쌓아보세요!</p>
        <Link to="/problems" className="btn-main">문제 풀러 가기</Link>
      </div>
      
    </div>
  );
};

export default Home;
