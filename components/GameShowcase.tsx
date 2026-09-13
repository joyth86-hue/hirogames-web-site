import Image from "next/image";

import showcaseArt from "@/public/images/game1/hero/top02.png";
import ElementWheel from "@/components/ElementWheel";
import PlayButton from "@/components/PlayButton";
import { glassCard } from "@/lib/ui";

const features = [
  {
    title: "4人のヒロインを編成",
    body: "炎・草・氷、3つの属性を操る4人のヒロイン。カエデとサユミはともに草属性だが、武器種（法器と弓）で戦い方が異なる。集めて育成し、その中から最大3人を選んでパーティを組む。",
  },
  {
    title: "ターン制コマンドバトル",
    body: "落ち着いて手を考えられるターン制。穏やかなホームのひとときから、緊迫のバトルBGMへ。",
  },
  {
    title: "武器ガチャで強化",
    body: "宝箱を開封して武器を入手。ランクはC・B・A・S・SSの5段階、上位ランクほど頼れる一振りに。",
  },
  {
    title: "全10ステージの冒険",
    body: "S-1からS-10まで連戦をこなして進む冒険。最後のS-10ではステージを守るボスが待ち受ける。",
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
            <span className="font-brand">Game 1</span> とは
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            ダークな世界観で紡ぐ、
            <br className="sm:hidden" />
            やさしい冒険。
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            ダークネイビーとパープルが基調の夜の和風ファンタジー世界を、
            丸っこく手描き風の可愛いキャラクターたちと歩く、JRPG風の
            ガチャバトルゲーム。属性の有利不利を読んだ戦略性と、
            集めて育てる楽しさが詰まっている。
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

            <div className={`${glassCard} p-6 sm:col-span-2`}>
              <h3 className="text-lg font-bold text-foreground">
                属性の相性
              </h3>
              <div className="mt-4">
                <ElementWheel />
              </div>
            </div>
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
                alt="Game 1 の戦闘イメージイラスト"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 「プレイする」は近日公開の非活性表示（PlayButton参照）。
            実際にキャラクター紹介へ移動する操作はこちらの控えめなリンクで行う。 */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <PlayButton size="md" />
          <a
            href="#characters"
            className="text-sm font-bold text-accent underline underline-offset-4 transition-colors hover:text-accent-strong"
          >
            キャラクターを見る ↓
          </a>
        </div>
      </div>
    </section>
  );
}
