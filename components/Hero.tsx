// Design Ref: §5.2 — Hero: 이름, 소개, CTA 버튼, 페이드인 애니메이션
import Link from "next/link";

export default function Hero() {
  return (
    <section className="fade-in min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl text-center">
        <p className="text-[#58a6ff] text-sm font-mono mb-4 tracking-widest uppercase">
          안녕하세요, 저는
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#e6edf3] mb-2 leading-tight">
          곽정훈입니다
        </h1>
        <p className="text-[#8b949e] text-xl sm:text-2xl mb-4 font-light">
          Web Developer
        </p>
        <p className="text-[#8b949e] text-lg sm:text-xl mb-8 leading-relaxed">
          React와 Next.js로 깔끔하고 반응형인 웹 서비스를 만듭니다.
          <br />
          직접 만든 프로젝트들을 아래에서 확인해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] font-semibold rounded-lg hover:bg-[#79c0ff] transition-colors"
          >
            프로젝트 보기
          </Link>
          <a
            href="https://github.com/jeonghun-k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#30363d] text-[#e6edf3] font-semibold rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
