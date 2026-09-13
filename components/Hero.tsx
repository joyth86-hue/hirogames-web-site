import Image from "next/image";

import logo from "@/public/images/game1/misc/l01.png";
import heroArt from "@/public/images/game1/hero/top01.png";
import BrandBackground from "@/components/BrandBackground";
import PlayButton from "@/components/PlayButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:py-24">
      <BrandBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
          {/* l01.pngは黒背景に白い発光ロゴのPNG。mix-blend-mode:screenで
              黒背景をサイトの背景色へなじませる（詳細はHeader.tsx参照）。 */}
          <Image
            src={logo}
            alt="hiro games"
            className="animate-fade-up h-auto w-48 mix-blend-screen sm:w-60"
            sizes="(min-width: 640px) 240px, 192px"
          />

          <h1 className="animate-fade-up font-brand mt-6 flex flex-wrap items-end justify-center gap-x-3 gap-y-1 text-6xl leading-none tracking-tight text-foreground [animation-delay:120ms] [text-shadow:4px_4px_0_#4a3f86] sm:text-7xl lg:justify-start lg:text-8xl">
            hiro fantasy
            <span className="text-lg font-bold text-foreground/50 [text-shadow:none] sm:text-xl">
              （仮）
            </span>
          </h1>

          <p className="animate-fade-up mt-5 text-lg font-bold text-accent [animation-delay:200ms] sm:text-xl">
            たったひとりの旅立ちが、いつしか誰にも譲れない仲間との物語になる。
          </p>

          <p className="animate-fade-up mt-4 max-w-md text-sm leading-relaxed text-foreground/75 [animation-delay:280ms] sm:text-base">
            戦いを重ねるほどに、新しい仲間が旅へ加わり、手にした力も少しずつ育っていく。
            まだ見たことのない景色を目指して、今日も一歩を踏み出そう。
          </p>

          <div className="animate-fade-up mt-8 flex flex-col items-center gap-4 [animation-delay:360ms] sm:flex-row">
            <PlayButton size="lg" />
            <a
              href="#game"
              className="text-sm font-bold text-accent underline underline-offset-4 transition-colors hover:text-accent-strong"
            >
              ゲーム紹介を見る ↓
            </a>
          </div>
        </div>

        <div className="animate-float relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[941/1672] w-full overflow-hidden rounded-[2rem] border-2 border-black bg-[#14132a] shadow-[8px_8px_0_0_#4a3f86]">
            {/* このイラストは実機の画面ではなく、世界観を伝えるための
                キービジュアル（コンセプトアート）であることを明示する。
                ドット絵のキャラクター画面（#charactersセクション）とは
                意図的にタッチを変えている。 */}
            <span className="absolute left-3 top-3 z-10 rounded-full border border-black bg-white px-2.5 py-1 text-[10px] font-bold text-black shadow-[2px_2px_0_0_#4a3f86]">
              コンセプトアート
            </span>
            <Image
              src={heroArt}
              alt="陽光の降り注ぐファンタジーの世界に立つ、4人のヒロインたち"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 85vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
