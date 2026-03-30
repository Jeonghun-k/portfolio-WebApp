// Design Ref: §5.3 — ProjectCard: 프로젝트 카드 (이미지/플레이스홀더, 링크, 기술 태그)
// Plan SC: SC-2 (프로젝트 카드 표시), SC-3 (링크 이동)
import { Project } from "@/types/project";
import TechBadge from "@/components/TechBadge";

interface ProjectCardProps {
  project: Project;
}


const typeLabels: Record<string, string> = {
  "web-app": "Web App",
  slide: "Slide",
  "open-source": "Open Source",
};

const typeBadgeColors: Record<string, string> = {
  "web-app": "text-[#58a6ff] bg-[#58a6ff]/10 border-[#58a6ff]/30",
  slide: "text-[#d29922] bg-[#d29922]/10 border-[#d29922]/30",
  "open-source": "text-[#3fb950] bg-[#3fb950]/10 border-[#3fb950]/30",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff]/50 transition-colors duration-200">
      {/* 카드 내용 */}
      <div className="flex flex-col flex-1 p-5">
        {/* 타입 배지 */}
        <span
          className={`self-start text-xs px-2 py-0.5 rounded-full border mb-3 ${typeBadgeColors[project.type]}`}
        >
          {typeLabels[project.type]}
        </span>

        {/* 제목 */}
        <h3 className="text-[#e6edf3] font-semibold text-base mb-2 leading-snug">
          {project.title}
        </h3>

        {/* 설명 */}
        <p className="text-[#8b949e] text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* 기술 태그 */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        {/* 링크 버튼 */}
        <div className="flex gap-2 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-2 border border-[#30363d] text-[#8b949e] rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {/* Plan SC: SC-3 — demo가 없으면 버튼 숨김 */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-2 bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] rounded-lg hover:bg-[#58a6ff]/20 transition-colors"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
