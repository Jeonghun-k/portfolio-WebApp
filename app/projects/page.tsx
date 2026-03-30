"use client";

// Design Ref: §6.2 — Projects: 필터 + 3열 그리드 (반응형)
// Plan SC: SC-1, SC-2, SC-4
import { useState } from "react";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Project, ProjectType } from "@/types/project";

type FilterType = ProjectType | "all";

const filterOptions: { value: FilterType; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "web-app", label: "웹 앱" },
  { value: "slide", label: "슬라이드" },
  { value: "open-source", label: "오픈소스" },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<FilterType>("all");

  const projects = projectsData as Project[];
  const filtered =
    selected === "all"
      ? projects
      : projects.filter((p) => p.type === selected);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">
        Projects
      </h1>
      <p className="text-[#8b949e] mb-10">
        직접 만든 웹 프로젝트들입니다.
      </p>

      {/* 필터 탭 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setSelected(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              selected === value
                ? "bg-[#58a6ff] text-[#0d1117] border-[#58a6ff]"
                : "border-[#30363d] text-[#8b949e] hover:border-[#58a6ff] hover:text-[#58a6ff]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      {filtered.length === 0 ? (
        <p className="text-[#8b949e] text-center py-16">
          해당 카테고리의 프로젝트가 없습니다.
        </p>
      ) : (
        // Plan SC: SC-4 — 반응형 그리드 (모바일 1열, 태블릿 2열, 데스크탑 3열)
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
