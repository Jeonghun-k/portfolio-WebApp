// Design Ref: §5.4 — TechBadge: 기술 스택 pill 태그
interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-[#21262d] text-[#58a6ff] border border-[#30363d] rounded-full">
      {tech}
    </span>
  );
}
