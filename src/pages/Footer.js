import React from 'react';
import '../css/Footer.css'; // 스타일 파일을 경로에 맞게 임포트합니다.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>리눅스 명령어를 공부하는 플랫폼, MyApp에 오신 것을 환영합니다!</p>
        <p>이 사이트는 리눅스 명령어를 재미있고, 쉽게 배울 수 있도록 도와줍니다.</p>
        
        {/* YouTube 링크 추가 */}
        <div className="social-links">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <button className="youtube-link">YouTube</button>
          </a>
        </div>

        <p>&copy; 2025 MyApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
