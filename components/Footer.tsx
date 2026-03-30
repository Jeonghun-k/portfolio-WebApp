// Design Ref: §5.5 — Footer: 하단 저작권
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#30363d] bg-[#161b22] py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#8b949e] text-sm">
        © {year} 곽정훈. Built with{" "}
        <span className="text-[#58a6ff]">Next.js</span> &{" "}
        <span className="text-[#58a6ff]">Tailwind CSS</span>
      </div>
    </footer>
  );
}
