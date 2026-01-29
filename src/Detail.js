import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    navigate('/');
    return null;
  }

  // 프로젝트의 mode 정보 가져오기
  const currentMode = project.mode || 'Des';

  return (
    <div className="detail-container">
      <header className="header">
        <div className="logo" onClick={() => navigate('/')}>ESSENT.STUDIO</div>
        <div className="nav-switch">
          <span className={currentMode === 'Des' ? 'active' : ''}>Des</span>
          <span style={{margin:'0 4px', color: '#fff'}}>/</span>
          <span className={currentMode === 'Lab' ? 'active' : ''}>Lab</span>
        </div>
        <div className="lets-talk">Let's Talk</div>
      </header>

      <div className="main-body">
        <main className="left-panel">
          {/* 메인 이미지 */}
          <div className="img-block" style={{ backgroundColor: project.color }}></div>

          {/* 서브 이미지들 */}
          {project.subImages && project.subImages.map((color, idx) => (
            <div key={idx} className="img-block" style={{ backgroundColor: color }}></div>
          ))}
        </main>

        <aside className="right-panel">
          <div className="txt-content">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-desc">{project.desc}</p>

            <div className="meta-info">
              <div className="meta-row">
                <span className="meta-label">Date</span>
                <span className="meta-value">{project.date}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Detail;