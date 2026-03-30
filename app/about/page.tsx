// Design Ref: §6.3 — About: 자기소개 + 기술 스택 카테고리별
// Plan SC: SC-1, SC-6
import TechBadge from "@/components/TechBadge";

const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend / Language",
    items: ["Python", "Node.js", "Java"],
  },
  {
    category: "Tools & Deploy",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">
        About Me
      </h1>
      <div className="w-16 h-1 bg-[#58a6ff] rounded-full mb-10" />

      {/* 자기소개 */}
      <section className="mb-14">
        <p className="text-[#8b949e] text-base leading-relaxed">
          안녕하세요! 웹 개발에 관심이 많은 학생 개발자입니다.
          <br />
          React와 Next.js를 주로 사용하며, 사용자가 편하게 쓸 수 있는 UI/UX를
          고민하는 것을 좋아합니다. 현재 대학에서 웹 응용 프로그래밍을
          공부하며 다양한 프로젝트를 통해 실력을 키우고 있습니다.
        </p>
      </section>

      {/* 기술 스택 */}
      <section>
        <h2 className="text-xl font-semibold text-[#e6edf3] mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-col gap-6">
          {techCategories.map(({ category, items }) => (
            <div key={category}>
              <p className="text-[#8b949e] text-sm mb-3 font-mono">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
