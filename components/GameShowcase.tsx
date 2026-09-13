import Image from "next/image";

import showcaseArt from "@/public/images/game1/hero/top02.png";
import PlayButton from "@/components/PlayButton";
import { glassCard } from "@/lib/ui";

const features = [
  {
    title: "ひとりから、始まる物語",
    body: "旅の始まりはいつもひとり。戦いを乗り越えるたびに新しい仲間が加わり、気づけばかけがえのないパーティになっている。",
  },
  {
    title: "見極めて、仕掛ける。",
    body: "ターン制のコマンドバトルだから、慌てなくていい。敵の弱点を見極め、仲間の力を引き出す一手を、じっくり選ぼう。",
  },
  {
    title: "積み重ねが、力になる",
    body: "レベルを上げ、武器を手に入れ、装備を整える。育てるほどに手応えが増していく楽しさは、この先「育てる楽しさ」で詳しく。",
  },
];

export default function GameShowcase() {
  return (
    <section
      id="game"
      className="relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wide text-accent sm:text-base">
            <span className="font-brand">hiro fantasy</span>（仮）とは
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            ひとりの旅路が、
            <br className="sm:hidden" />
            かけがえのない絆に変わるまで。
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            丸みを帯びた愛らしい仲間たちと、手描き感のあるファンタジーの世界を旅する
            コマンドバトルRPG。じっくり狙いを定めて挑む戦いと、集めて育てる楽しさを、
            飽きるまでとことん味わえる。
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className={`${glassCard} p-6`}>
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-[941/1672] w-full overflow-hidden rounded-[2rem] border-2 border-black bg-[#14132a] shadow-[8px_8px_0_0_#4a3f86]">
              {/* こちらもコンセプトアート（世界観を伝えるための一枚絵）。
                  実機のキャラクター画面は#charactersセクションのドット絵側。 */}
              <span className="absolute left-3 top-3 z-10 rounded-full border border-black bg-white px-2.5 py-1 text-[10px] font-bold text-black shadow-[2px_2px_0_0_#4a3f86]">
                コンセプトアート
              </span>
              <Image
                src={showcaseArt}
                alt="夕焼けに染まるファンタジーの世界を進む、4人のヒロインたち"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <PlayButton size="md" />
          <a
            href="#characters"
            className="text-sm font-bold text-accent underline underline-offset-4 transition-colors hover:text-accent-strong"
          >
            仲間たちを見る ↓
          </a>
        </div>
      </div>
    </section>
  );
}
