import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Link import
import './ProblemArticle.css'; // CSS 파일 import

function ProblemArticle() {
  const [problems, setProblems] = useState([]); // 문제 리스트를 저장할 상태

  useEffect(() => {
    // 절대 경로를 사용하여 API 요청
    axios.get('http://localhost:8080/findByAllProblem')
      .then(response => {
        setProblems(response.data); // 받아온 데이터로 상태 업데이트
      })
      .catch(error => {
        console.error("문제 데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className="problem-article">
      <h1>문제 리스트</h1>
      <div className="problem-cards">
        {problems.map(problem => (
          <div key={problem.problemId} className="problem-card">
            <h3 className="problem-title">{problem.title}</h3>
            <p>문제 번호: {problem.problemNumber}</p>
            <p>좋아요: {problem.likes}</p>
            {/* 문제 풀기 버튼을 누르면 ProblemDetail.js로 이동 */}
            <Link to={`/problem/${problem.problemId}`}>
              <button className="solve-button">문제 풀기</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemArticle;
