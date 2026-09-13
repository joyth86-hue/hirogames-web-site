import Image from "next/image";

import logo from "@/public/images/game1/misc/l01.png";

// ページ内アンカーリンク。各セクションのidは hiro fantasy（仮）とは(#game) /
// キャラクター(#characters) / 育てる楽しさ(#growth) / これから(#coming-soon) に対応。
const navLinks = [
  { href: "#game", label: "ゲーム紹介" },
  { href: "#characters", label: "キャラクター" },
  { href: "#growth", label: "育成" },
  { href: "#coming-soon", label: "今後の展開" },
];

// シンプルな sticky ヘッダー。ロゴ＋ページ内アンカーリンクのみ。
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#100f24]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          {/* l01.pngは黒背景に白い発光ロゴのPNG。サイトの紺〜パープルの
              グラデーション背景と地の色が微妙に異なり、黒い四角の箱のように
              浮いて見えるため、mix-blend-mode:screenで黒背景を背景色へ
              なじませる（screenは黒との合成で相手側の色をそのまま透過させ、
              白い発光部分は明るいまま残る）。 */}
          <Image
            src={logo}
            alt="hiro games"
            className="h-6 w-auto mix-blend-screen sm:h-8"
            priority
          />
        </a>

        <nav aria-label="ページ内ナビゲーション" className="min-w-0">
          <ul className="flex items-center gap-2 text-[11px] font-bold text-foreground/80 sm:gap-6 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href} className="whitespace-nowrap">
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
