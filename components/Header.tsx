import Image from "next/image";

import logo from "@/public/images/game1/misc/l01.png";

// ページ内アンカーリンク。各セクションのidは Game 1とは(#game) /
// キャラクター(#characters) / これから(#coming-soon) に対応。
const navLinks = [
  { href: "#game", label: "ゲーム紹介" },
  { href: "#characters", label: "キャラクター" },
  { href: "#coming-soon", label: "今後の展開" },
];

// シンプルな sticky ヘッダー。ロゴ＋ページ内アンカーリンクのみ。
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#100f24]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <Image
            src={logo}
            alt="hiro games"
            className="h-7 w-auto sm:h-8"
            priority
          />
        </a>

        <nav aria-label="ページ内ナビゲーション">
          <ul className="flex items-center gap-3 text-xs font-bold text-foreground/80 sm:gap-6 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
