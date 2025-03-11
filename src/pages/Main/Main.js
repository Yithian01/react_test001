import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import './Main.css';

function Main() {
  return (
    <div className="main">
      <div className="content">
        <p className="title">KernelQuest</p>
        <p className="description">Linux 환경을 공부할 수 있는 곳입니다.</p>
        <Link to="/problems">
          <button className="start-button">문제 풀러가기</button>
        </Link>

        <hr className="separator" />
        <img src="/kernelQuestMainTema.png" alt="Linux Theme" className="image" />
      </div>
    </div>
  );
}

export default Main;
