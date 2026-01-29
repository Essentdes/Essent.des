import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Detail from './Detail';

function MainPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('Des'); 
  const [category, setCategory] = useState('All Project');

  const [form, setForm] = useState({ name: '', content: '', email: '' });
  const [errors, setErrors] = useState({ name: '', content: '', email: '' });

  const handleReset = () => {
    window.scrollTo(0, 0);
    setCategory('All Project');
    setForm({ name: '', content: '', email: '' });
    setErrors({});
    navigate('/');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = '* 필수 항목입니다.';
    if (!form.content.trim()) newErrors.content = '* 필수 항목입니다.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!form.email.trim()) newErrors.email = '* 필수 항목입니다.';
    else if (!emailRegex.test(form.email)) newErrors.email = '* 올바른 이메일 형식이 아닙니다.'; 

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`[전송 성공!]\n\n담당자: ${form.name}\n이메일: ${form.email}`);
      setForm({ name: '', content: '', email: '' });
    }
  };

  // Des 프로젝트들
  const desProjects = [
    { 
      id: 'des-1', 
      mode: 'Des',
      title: 'BBAR WORKS', 
      sub: '브랜드 패키지 디자인 리뉴얼', 
      height: '400px', 
      color: '#333', 
      desc: '이곳은 관리자가 프로젝트에 대해 깊이 있는 설명을 적는 공간입니다. 디자인 의도, 비하인드 스토리, 혹은 강조하고 싶은 디테일을 상세하게 기술할 수 있습니다.',
      date: '2025.10', 
      client: 'BBar Co.', 
      role: 'Art Direction, Brand Design',
      subImages: ['#444', '#555', '#666']
    },
    { 
      id: 'des-2', 
      mode: 'Des',
      title: 'ENHYPEN PACKAGE', 
      sub: '앨범 아트워크 및 패키지', 
      height: '250px', 
      color: '#444', 
      desc: '엔하이픈의 앨범 컨셉을 시각화하는 과정에 대한 설명입니다.',
      date: '2025.08', 
      client: 'Belift Lab', 
      role: 'Album Artwork',
      subImages: ['#555', '#666', '#777', '#888']
    },
    { 
      id: 'des-3', 
      mode: 'Des',
      title: 'Brand Identity', 
      sub: '브랜드 아이덴티티', 
      height: '500px', 
      color: '#555', 
      desc: '브랜드 아이덴티티 디자인 프로젝트입니다.', 
      date: '2025.05', 
      client: 'Self', 
      role: 'Brand Design', 
      subImages: ['#666', '#777']
    },
    { 
      id: 'des-4', 
      mode: 'Des',
      title: 'Poster Collection', 
      sub: '포스터 시리즈', 
      height: '350px', 
      color: '#666', 
      desc: '포스터 컬렉션 디자인 작업입니다.', 
      date: '2025.01', 
      client: 'Personal', 
      role: 'Graphic Design', 
      subImages: ['#777', '#888']
    },
    { 
      id: 'des-5', 
      mode: 'Des',
      title: 'Editorial Design', 
      sub: '편집 디자인', 
      height: '450px', 
      color: '#777', 
      desc: '편집 디자인 프로젝트입니다.', 
      date: '2024.12', 
      client: 'Publisher', 
      role: 'Editorial', 
      subImages: ['#888', '#999']
    },
    { 
      id: 'des-6', 
      mode: 'Des',
      title: 'Character Design', 
      sub: '캐릭터 디자인', 
      height: '300px', 
      color: '#888', 
      desc: '캐릭터 디자인 작업입니다.', 
      date: '2024.11', 
      client: 'Game Co.', 
      role: 'Character', 
      subImages: ['#999', '#aaa']
    },
  ];

  // Lab 프로젝트들
  const labProjects = [
    { 
      id: 'lab-1', 
      mode: 'Lab',
      title: 'Web Design Portfolio', 
      sub: '웹사이트 개발', 
      height: '400px', 
      color: '#2a5', 
      desc: '포트폴리오 웹사이트 디자인 및 개발 프로젝트입니다.', 
      date: '2025.09', 
      client: 'Self', 
      role: 'Web Dev', 
      subImages: ['#3b6', '#4c7']
    },
    { 
      id: 'lab-2', 
      mode: 'Lab',
      title: 'React Component Library', 
      sub: '컴포넌트 라이브러리', 
      height: '300px', 
      color: '#369', 
      desc: 'React 컴포넌트 라이브러리 개발 프로젝트입니다.', 
      date: '2025.07', 
      client: 'Open Source', 
      role: 'Frontend Dev', 
      subImages: ['#47a', '#58b']
    },
    { 
      id: 'lab-3', 
      mode: 'Lab',
      title: 'App UI Concept', 
      sub: '앱 프로토타입', 
      height: '450px', 
      color: '#639', 
      desc: '앱 UI/UX 프로토타입 제작 프로젝트입니다.', 
      date: '2025.05', 
      client: 'Startup', 
      role: 'UI/UX Dev', 
      subImages: ['#74a', '#85b']
    },
    { 
      id: 'lab-4', 
      mode: 'Lab',
      title: 'Animation Study', 
      sub: '애니메이션 실험', 
      height: '350px', 
      color: '#c36', 
      desc: '웹 애니메이션 기술 연구 프로젝트입니다.', 
      date: '2025.03', 
      client: 'Study', 
      role: 'Frontend', 
      subImages: ['#d47', '#e58']
    },
  ];

  // 현재 모드에 따라 보여줄 프로젝트 선택
  const currentProjects = mode === 'Des' ? desProjects : labProjects;

  // 프로젝트 카드 클릭 시 Detail 페이지로 이동 (mode 정보도 함께 전달)
  const handleCardClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo" onClick={handleReset}>ESSENT.STUDIO</div>
        <div className="nav-switch">
          <span className={mode === 'Des' ? 'active' : ''} onClick={() => setMode('Des')}>Des</span> 
          <span style={{color: '#fff', margin: '0 4px'}}>/</span> 
          <span className={mode === 'Lab' ? 'active' : ''} onClick={() => setMode('Lab')}>Lab</span>
        </div>
        <div className="lets-talk">Let's Talk</div>
      </header>

      <div className="container">
        <main className="left-content">
          <div className="sub-header">
            <div className="filter-bar">
              <span 
                className={`filter-item ${category === 'All Project' ? 'active' : ''}`}
                onClick={() => setCategory('All Project')}
              >
                All Project
              </span>
              {mode === 'Lab' && (
                <span 
                  className={`filter-item ${category === '코드 한 입' ? 'active' : ''}`}
                  onClick={() => setCategory('코드 한 입')}
                >
                  코드 한 입
                </span>
              )}
            </div>
          </div>

          <div className="title-area">
            <h1 style={{fontSize: '40px', fontWeight: '600', lineHeight:'1', margin: 0}}>
              {category}
            </h1>
            <input type="text" placeholder="Search..." className="search-input" />
          </div>

          <div className="masonry-grid">
            {currentProjects.map((project) => (
              <div 
                className="project-card" 
                key={project.id}
                onClick={() => handleCardClick(project)}
              >
                <div 
                  className="project-img" 
                  style={{ height: project.height, backgroundColor: project.color }} 
                />
                <div className="card-overlay">
                  <div>
                    <h3 style={{fontSize: '16px', fontWeight: 'bold'}}>{project.title}</h3>
                    <p style={{fontSize: '13px', color: '#ccc', marginTop: '5px'}}>{project.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="right-sidebar">
          <div className="intro-text">
            <p style={{marginBottom: '24px'}}>
              Essent는 디자인으로 소통을 설계하는 디자인 스튜디오 입니다.
            </p>
            <p style={{marginBottom: '24px'}}>
              디자인은 혼자 만드는 결과물이 아니라, 여러 이해 관계자와의 대화 속에서 완성된다고 생각합니다.
            </p>
            <p>
              Essent는 계속해서 배우고 정리하며, 의도를 정확히 전달하고 이해하는 과정을 통해 소통이 되는 디자이너로 일하기 위해 운영됩니다.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a href="mailto:Essent.des@gmail.com">Essent.des@gmail.com</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Instagram</span>
              <span className="contact-value">
                <a href="https://www.instagram.com/Essent.des" target="_blank" rel="noopener noreferrer">@Essent.des</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Behance</span>
              <span className="contact-value">
                <a href="https://www.behance.net/Essent.des" target="_blank" rel="noopener noreferrer">@Essent.des</a>
              </span>
            </div>
          </div>

          <div className="contact-form-area">
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom:'1px solid #333', 
              paddingBottom:'12px',        
              marginBottom:'15px'     
            }}>
              <h3 style={{fontSize:'22px', fontWeight:'normal', margin: 0}}>프로젝트 문의</h3>
              <button className="submit-btn" type="button" onClick={handleSubmit}>문의하기</button>
            </div>

            <form className="contact-form">
              <div className="input-group">
                <label className="form-label">담당자 이름</label>
                <input 
                  type="text" name="name" 
                  value={form.name} onChange={handleInput} 
                  className="form-input" 
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              
              <div className="input-group">
                <label className="form-label">프로젝트 내용</label>
                <textarea 
                  name="content" rows="4" 
                  value={form.content} onChange={handleInput}
                  className="form-textarea"
                ></textarea>
                {errors.content && <p className="error-text">{errors.content}</p>}
              </div>
              
              <div className="input-group">
                <label className="form-label">EMAIL</label>
                <input 
                  type="email" name="email" 
                  value={form.email} onChange={handleInput}
                  className="form-input" 
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;