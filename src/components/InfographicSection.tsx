import { useState } from "react";

const infographicStyles = [
  {
    id: 1,
    name: "네오 브루탈리즘",
    nameEn: "Neo-Brutalism",
    description: "강렬한 검정 테두리와 원색을 사용해 힙한 느낌을 줍니다.",
    promptKr: "노트북LM을 위한 인포그래픽, 네오 브루탈리즘 스타일, 굵은 검정 외곽선, 고대비 원색 사용, 볼드한 타이포그래피, 떠다니는 문서와 AI 아이콘, 현대적이고 파격적인 테크 디자인, 하얀 배경.",
    promptEn: 'Infographic for "NotebookLM", Neo-brutalism style, bold black outlines, high contrast vibrant colors, thick typography, floating document icons and AI symbols, edgy and modern tech aesthetic, white background.',
  },
  {
    id: 2,
    name: "클린 화이트 미니멀리즘",
    nameEn: "Minimalism",
    description: "여백의 미를 강조한 애플(Apple) 스타일의 깔끔함.",
    promptKr: "노트북LM AI 서비스, 미니멀리즘 스타일, 깨끗한 화이트 에스테틱, 가느다란 회색 선, 넓은 여백, 부드러운 블루 포인트 컬러, 단순한 벡터 아이콘, 우아하고 전문적인 디자인.",
    promptEn: "Minimalist infographic for NotebookLM AI service, Apple-style clean aesthetics, thin grey lines, vast negative space, soft blue accents, simple vector icons, elegant and professional.",
  },
  {
    id: 3,
    name: "글래스모피즘",
    nameEn: "Glassmorphism",
    description: "반투명 유리창이 겹쳐진 듯한 입체적이고 세련된 디자인.",
    promptKr: "미래형 UI 인포그래픽, 글래스모피즘 스타일, 반투명한 유리 카드, 배경 흐림 효과(Blur), 은은한 파스텔톤 그라데이션, 떠다니는 3D 문서 및 뇌 연결 아이콘, 고급 소프트웨어 디자인.",
    promptEn: "Futuristic UI infographic, Glassmorphism style, semi-transparent frosted glass cards, soft background blur, glowing pastel gradients, 3D floating digital file icons, high-end software look.",
  },
  {
    id: 4,
    name: "핸드 드로잉 스케치",
    nameEn: "Hand-Drawn",
    description: "종이 위에 펜으로 직접 그린 듯한 인간적인 디자인.",
    promptKr: "창의적인 브레인스토밍 인포그래픽, 핸드 드로잉 스케치 스타일, 낙서 스타일의 화살표와 전구 아이콘, 인간적인 터치, 유기적이고 생동감 넘치는 구성, 종이 질감 배경.",
    promptEn: "Creative brainstorming infographic, hand-drawn sketch style, scribbled arrows, doodle icons of lightbulbs and papers, human touch, organic and lively, paper texture background.",
  },
  {
    id: 5,
    name: "데이터 시각화 노드",
    nameEn: "Node-Link",
    description: "지식의 연결망을 선과 점으로 표현한 논리적 스타일.",
    promptKr: "복잡한 지식 그래프 인포그래픽, 데이터 포인트를 연결하는 노드와 선들, '점들을 연결하다'는 컨셉, 전문적인 데이터 과학 시각화, 블루와 실버 컬러 조합.",
    promptEn: 'Complex knowledge graph infographic, interconnected nodes and lines, "connecting the dots" concept, professional data science visualization, blue and silver color palette.',
  },
];

const InfographicSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="infographics" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="tag-blue mb-4 block w-fit">Visual Design</span>
          <h2 className="kinetic-subtitle text-4xl md:text-6xl mb-4">
            <span className="kinetic-blue">인포그래픽</span>{" "}
            <span className="text-stroke-blue">스타일</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            다양한 스타일의 인포그래픽 프롬프트로 시각적 임팩트를 극대화하세요.
          </p>
        </div>

        <div className="space-y-4">
          {infographicStyles.map((style, index) => (
            <div
              key={style.id}
              className="card-kinetic-blue animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedId(expandedId === style.id ? null : style.id)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-display text-secondary">
                    {String(style.id).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-display">{style.name}</h3>
                    <p className="text-sm text-secondary">{style.nameEn}</p>
                  </div>
                </div>
                <div className={`text-2xl transition-transform duration-300 ${expandedId === style.id ? "rotate-180" : ""}`}>
                  ↓
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${expandedId === style.id ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                <p className="text-muted-foreground mb-4">{style.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">한국어 프롬프트:</p>
                    <div className="prompt-box-blue">
                      {style.promptKr}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">English Prompt:</p>
                    <div className="prompt-box-blue">
                      {style.promptEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;
