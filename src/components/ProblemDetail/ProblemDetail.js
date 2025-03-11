import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProblemDetail.css';

function ProblemDetail() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const fetchProblemDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/findProblem/${problemId}`);
        setProblem(response.data);
        setIsFavorited(response.data.likes > 0);
      } catch (error) {
        console.error("문제 세부 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchProblemDetail();
  }, [problemId]);

  const toggleHint = () => {
    setShowHint(prevState => !prevState);
  };

  const toggleFavorite = () => {
    setIsFavorited(prevState => !prevState);
  };

  if (!problem) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="problem-detail">
      <h1 className="problem-number">{problem.problemNumber}. {problem.title}</h1>

      {/* 네비바 추가 부분 */}
      <nav className="problem-nav">
        <ul>
          <li><a href="#">제출</a></li>
          <li><a href="#">맞힌 사람</a></li>
          <li><a href="#">채점 현황</a></li>
          <li><a href="#">질문 게시판</a></li>
        </ul>
      </nav>

      <div className="problem-info">
        <div className="problem-header"></div>
        <div className="problem-stats">
          <p>정답률: {problem.correctRate}% </p>
          <button
            className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
            onClick={toggleFavorite}
          >
            {isFavorited ? (
              <>
                ❤️ 즐겨찾기 ({problem.likes})
              </>
            ) : (
              <>
                🤍 즐겨찾기 ({problem.likes})
              </>
            )}
          </button>
        </div>
        <hr />
        <div className="problem-question">
          <h3>문제</h3>
          <p>{problem.question}</p>
        </div>
        <hr/>
        <div className="problem-hint">
          <h3>힌트</h3>
          <button onClick={toggleHint} className="hint-button">
            {showHint ? "힌트 숨기기" : "보기"}
          </button>
          {showHint && <p>{problem.hint}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProblemDetail;
