// Design Ref: §6.4 — Contact: 이메일 링크 + GitHub 링크
// Plan SC: SC-1, SC-3 (링크 새 탭 이동)
const contactLinks = [
  {
    icon: "📧",
    label: "이메일 보내기",
    href: "mailto:kdfkjh@kyungsung.ac.kr",
    description: "kdfkjh@kyungsung.ac.kr",
    external: false,
  },
  {
    icon: "🐙",
    label: "GitHub 프로필",
    href: "https://github.com/jeonghun-k",
    description: "github.com/jeonghun-k",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">
        Contact
      </h1>
      <div className="w-16 h-1 bg-[#58a6ff] rounded-full mb-6" />
      <p className="text-[#8b949e] mb-12 leading-relaxed">
        프로젝트 협업, 질문, 피드백 등 편하게 연락주세요.
      </p>

      <div className="flex flex-col gap-4">
        {contactLinks.map(({ icon, label, href, description, external }) => (
          <a
            key={href}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex items-center gap-4 p-5 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#58a6ff] transition-colors group"
          >
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="text-[#e6edf3] font-medium group-hover:text-[#58a6ff] transition-colors">
                {label}
              </p>
              <p className="text-[#8b949e] text-sm">{description}</p>
            </div>
            <span className="ml-auto text-[#8b949e] group-hover:text-[#58a6ff] transition-colors">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
