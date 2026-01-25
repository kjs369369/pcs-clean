import { useEffect, useState, useRef } from "react";
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = ['#FF0000', '#0048BA', '#FFFFFF'];

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - dist2 / 100) * 0.15;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />

      {/* Spline 3D Card */}
      <Card className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hidden lg:block z-20">
        <Spotlight
          className="from-primary/30 via-primary/20 to-transparent"
          size={300}
        />
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </Card>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-[14vw] font-display text-stroke opacity-10 animate-float">
          AI
        </div>
        <div className="absolute bottom-20 right-10 text-[10vw] font-display text-stroke-red opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          프롬프트
        </div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-primary/20 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-secondary/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto lg:mr-[450px]">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="tag-red mb-4 animate-pulse-glow text-xs">AI강사사관학교</p>
        </div>

        <h1 className={`kinetic-title-sm mb-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block">AI활용</span>
          <span className="block kinetic-accent">강의안</span>
          <span className="block">&</span>
          <span className="block kinetic-blue">시각화자료</span>
          <span className="block text-stroke">제작 클래스</span>
        </h1>

        <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base md:text-lg text-muted-foreground mb-1">
            강사 : <span className="text-foreground font-bold">AI강사사관학교 지도교수 김진수</span>
          </p>
          <p className="text-xs text-muted-foreground">
            작성자 : AICLab 김진수
          </p>
        </div>

        <div className={`mt-10 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#slides" className="px-6 py-2 text-sm bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/80 transition-all hover:scale-105">
            슬라이드 디자인
          </a>
          <a href="#infographics" className="px-6 py-2 text-sm bg-secondary text-secondary-foreground font-bold uppercase tracking-wider hover:bg-secondary/80 transition-all hover:scale-105">
            인포그래픽
          </a>
          <a href="#roles" className="px-6 py-2 text-sm border border-foreground text-foreground font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all hover:scale-105">
            역할별 프롬프트
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-5 h-8 border-2 border-foreground rounded-full flex items-start justify-center p-1.5">
          <div className="w-0.5 h-1.5 bg-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
