import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProblemDetail.css';

function ProblemDetail() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [userCode, setUserCode] = useState('');  // 사용자가 입력한 코드 저장
  const [output, setOutput] = useState('');  // 결과 출력

  // 문제 세부 정보 가져오기
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

  // 힌트 토글
  const toggleHint = () => {
    setShowHint(prevState => !prevState);
  };

  // 즐겨찾기 토글
  const toggleFavorite = () => {
    setIsFavorited(prevState => !prevState);
  };

  // 코드 변경 처리
  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
  };

  // 제출 버튼 클릭 시 호출되는 함수
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/submitProblem', {
        problemId: problemId,
        answer: userCode
      });
      
      // 서버로부터 받은 결과를 output 상태에 설정
      setOutput(response.data);
      
      // 콘솔에 응답 결과 출력
      console.log('서버 응답 결과:', response.data);
    } catch (error) {
      console.error("코드를 제출하는 중 오류 발생:", error);
      setOutput('제출에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 로딩 중 표시
  if (!problem) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="problem-detail">
      <h1 className="problem-number">{problem.problemNumber}. {problem.title}</h1>

      {/* 네비바 추가 부분 */}
      <nav className="problem-nav">
        <ul>
          <li><a href="#">내 제출</a></li>
          <li><a href="#">맞힌 사람</a></li>
          <li><a href="#">채점 현황</a></li>
          <li><a href="#">질문 게시판</a></li>
        </ul>
      </nav>

      <div className="problem-content">
        <div className="problem-info">
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

        {/* 코드 입력 공간 (우측 영역) */}
        <div className="code-input">
          <h3>코드 입력</h3>
          <textarea
            value={userCode}
            onChange={handleCodeChange}
            placeholder="여기에 코드를 입력하세요..."
            rows="15"
          />
        </div>
      </div>

      {/* 제출 버튼 */}
      <div className="submit-section">
        <button className="submit-button" onClick={handleSubmit}>
          제출
        </button>
      </div>

      {/* 출력창 */}
      <div className="output-section">
        <h3>출력 결과</h3>
        <div className="output-box">
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default ProblemDetail;
