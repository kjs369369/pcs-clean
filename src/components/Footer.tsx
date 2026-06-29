const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="kinetic-subtitle text-2xl mb-4">
              <span className="kinetic-accent">AI</span>CLab
            </h3>
            <p className="text-muted-foreground text-sm">
              AI활용 강의안 및 시각화자료 제작을 위한 실전 프롬프트 가이드
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#slides" className="nav-link">슬라이드 디자인</a>
              </li>
              <li>
                <a href="#infographics" className="nav-link">인포그래픽</a>
              </li>
              <li>
                <a href="#roles" className="nav-link">역할별 프롬프트</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>강사: AI강사사관학교 지도교수 김진수</li>
              <li>작성자: 김진수</li>
            </ul>
          </div>
        </div>
        
        <div className="section-divider mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© 2026 김진수 (Kim Jin-soo). All Rights Reserved.</p>
            <p className="text-xs mt-1 opacity-80">무단 전재·복제·배포를 금합니다 · All content is protected.</p>
            <p className="text-xs mt-1 opacity-60">정리본 2026-06-21</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="tag-red">AI강사사관학교</span>
            <span className="tag-blue">실전프롬프트</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
