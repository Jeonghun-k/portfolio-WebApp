// Design Ref: §6.1 — Home: Hero + TechStack 섹션
// Plan SC: SC-1 (Home 페이지 정상 렌더링)
import Hero from "@/components/Hero";
import TechBadge from "@/components/TechBadge";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "Node.js",
  "Git",
  "Vercel",
  "HTML/CSS",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tech Stack 섹션 */}
      <section className="fade-in py-16 px-4 sm:px-6 border-t border-[#30363d]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#8b949e] text-sm font-mono uppercase tracking-widest mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
