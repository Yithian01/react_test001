import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">KernulQuest</Link> {/* 로고 클릭 시 메인 화면으로 이동 */}
      </div>
      <div className="nav-links">
        <Link to="/problems">문제</Link> {/* 문제 페이지로 이동 */}
        <a href="#forum">질문 게시판</a>
        <a href="#status">채점 현황</a>
      </div>
      <div className="profile">
        <a href="#login">로그인</a> | <a href="#signup">회원가입</a>
      </div>
    </nav>
  );
}

export default Navbar;
