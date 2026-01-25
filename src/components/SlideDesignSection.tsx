import { useState } from "react";

const slideStyles = [
  {
    id: 1,
    name: "Steve Jobs 스타일",
    subtitle: '"One More Thing"',
    description: "극강의 단순함과 임팩트",
    usage: "제품 런칭, 핵심 가치 전달, 비전 선포",
    prompt: `"당신은 스티브 잡스 스타일의 커뮤니케이션 전문가입니다. 모든 복잡한 분석 내용을 **'단 하나의 문장'**과 **'세 개의 키워드'**로 압축하세요. 슬라이드 한 장에는 오직 하나의 메시지만 담겨야 합니다. 전문 용어 대신 '마법 같은(Magic)', '혁신적인(Incredible)' 같은 감성적인 단어를 적절히 섞어 청중의 기대감을 고조시키는 톤으로 작성하세요."`,
    followUp: `"이 소스 파일들을 위 지침에 따라 요약해 줘"`,
    color: "primary",
  },
  {
    id: 2,
    name: "TOSS BLUE LUXE",
    subtitle: "토스 스타일",
    description: "극강의 직관성",
    usage: "사용자 친화적 설명, 서비스 안내",
    prompt: `"모든 답변을 토스(Toss)의 디자인 철학인 '간결함'에 맞추어 재구성하세요. 전문 용어는 초등학생도 이해할 만큼 쉽게 풀이하고, 내용은 불렛포인트 3개 이내로 요약하세요. 마지막에는 '한 줄 요약'을 배치하여 사용자가 즉시 실행할 수 있는 행동 지침을 제시하세요. 복잡한 문장은 단문으로 쪼개어 가독성을 극대화하세요."`,
    followUp: `"이 소스 파일들을 위 지침에 따라 요약해 줘"`,
    color: "secondary",
  },
  {
    id: 3,
    name: "NEO-BRUTALISM EDGE",
    subtitle: "네오 브루탈리즘",
    description: "파격과 직설",
    usage: "강렬한 메시지 전달, 트렌디한 프레젠테이션",
    prompt: `"격식을 차리지 말고 직설적이고 파격적으로 핵심을 찌르세요. 'Bullshit-free Summary' 섹션을 최상단에 배치하여 본질만 남기고 나머지는 과감히 삭제하세요. 굵고 강렬한 단어를 사용하고, 기존의 관습적인 해석을 뒤엎는 'Provocative Point(도발적 관점)'를 반드시 하나 이상 포함하세요."`,
    followUp: `"이 소스 파일들을 위 지침에 따라 요약해 줘"`,
    color: "primary",
  },
  {
    id: 4,
    name: "THE KINFOLK SERIF",
    subtitle: "킨포크 스타일",
    description: "감성적 사유",
    usage: "브랜드 스토리텔링, 감성적 콘텐츠",
    prompt: `"당신은 킨포크 매거진의 에디터입니다. 정보를 단순히 나열하지 말고, 마치 따뜻한 차 한 잔을 마시며 나누는 대화처럼 서술하세요. '사유의 여백'이라는 섹션을 만들어 이 정보가 우리 삶에 주는 의미를 감성적으로 짚어주세요. 명조체 느낌의 문어체를 사용하고, 서두에 오늘의 무드를 설명하는 짧은 문장을 포함하세요."`,
    followUp: `"이 소스 파일들을 위 지침에 따라 요약해 줘"`,
    color: "secondary",
  },
];

const SlideDesignSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="slides" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="tag-red mb-4 block w-fit">실전 프롬프트</span>
          <h2 className="kinetic-subtitle text-4xl md:text-6xl mb-4">
            <span className="text-stroke-red">슬라이드</span>{" "}
            <span className="kinetic-accent">디자인</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            NotebookLM과 함께 사용할 수 있는 슬라이드 디자인 프롬프트입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {slideStyles.map((style, index) => (
            <div
              key={style.id}
              className={`${style.color === "primary" ? "card-kinetic" : "card-kinetic-blue"} cursor-pointer animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveCard(activeCard === style.id ? null : style.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={style.color === "primary" ? "tag-red" : "tag-blue"}>
                    {style.id}
                  </span>
                  <h3 className="text-2xl font-display mt-2">{style.name}</h3>
                  <p className={`text-sm ${style.color === "primary" ? "text-primary" : "text-secondary"}`}>
                    {style.subtitle}
                  </p>
                </div>
                <div className={`text-3xl transition-transform duration-300 ${activeCard === style.id ? "rotate-45" : ""}`}>
                  +
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-2">{style.description}</p>
              <p className="text-xs text-muted-foreground mb-4">
                <strong>용도:</strong> {style.usage}
              </p>

              <div className={`overflow-hidden transition-all duration-500 ${activeCard === style.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">NotebookLM 프롬프트:</p>
                  <div className={style.color === "primary" ? "prompt-box" : "prompt-box-blue"}>
                    {style.prompt}
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-xs text-muted-foreground">{style.followUp}</p>
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

export default SlideDesignSection;
