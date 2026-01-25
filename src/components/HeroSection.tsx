import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-[20vw] font-display text-stroke opacity-10 animate-float">
          AI
        </div>
        <div className="absolute bottom-20 right-10 text-[15vw] font-display text-stroke-red opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          프롬프트
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-secondary/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="tag-red mb-6 animate-pulse-glow">AI강사사관학교</p>
        </div>

        <h1 className={`kinetic-title mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block">AI활용</span>
          <span className="block kinetic-accent">강의안</span>
          <span className="block">&</span>
          <span className="block kinetic-blue">시각화자료</span>
          <span className="block text-stroke">제작 클래스</span>
        </h1>

        <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            강사 : <span className="text-foreground font-bold">AI강사사관학교 지도교수 김진수</span>
          </p>
          <p className="text-sm text-muted-foreground">
            작성자 : AICLab 김진수
          </p>
        </div>

        <div className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#slides" className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/80 transition-all hover:scale-105">
            슬라이드 디자인
          </a>
          <a href="#infographics" className="px-8 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider hover:bg-secondary/80 transition-all hover:scale-105">
            인포그래픽
          </a>
          <a href="#roles" className="px-8 py-3 border border-foreground text-foreground font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all hover:scale-105">
            역할별 프롬프트
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
