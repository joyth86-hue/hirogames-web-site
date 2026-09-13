import Image from "next/image";

import chestClosed from "@/public/images/game1/gacha/chest_ss_closed.png";
import chestOpen from "@/public/images/game1/gacha/chest_ss_open.png";
import { glassCard } from "@/lib/ui";

const growthPoints = [
  {
    title: "経験を、力に変える",
    body: "戦って得た経験は、好きな仲間にそそぎ込める。誰を、どれだけ鍛えるかはあなた次第。",
  },
  {
    title: "身にまとうすべてが、力になる",
    body: "武器はもちろん、指輪や首飾り、腕輪や耳飾りまで。装いを整えるほど、戦い方の幅が広がる。",
    tags: ["護符", "指輪", "腕輪", "首飾り", "耳飾り", "ブローチ", "帯留め"],
  },
  {
    title: "覚えたスキルは、磨ける",
    body: "通常攻撃だけでは終わらない。習得したスキルにさらに手をかければ、一撃はもっと鋭くなる。",
  },
];

// 育成要素（レベル育成・武器ガチャ・装備・スキル）を紹介するセクション。
// 「ランクはC・B・A・S・SSの5段階」のような仕様の棒読みを避け、宝箱を
// 開ける高揚感そのものを主役にしている。
export default function GrowthShowcase() {
  return (
    <section
      id="growth"
      className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-brand text-sm font-bold tracking-wide text-accent sm:text-base">
            育てる楽しさ
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            積み上げた選択が、確かな強さになる。
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            宝箱の蓋が持ち上がる、あの一瞬の高揚感。C・B・Aと積み重ねて、
            いつかまばゆいSSを引き当てる日を夢見て、今日も蓋を開ける。
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div className="mx-auto flex w-full max-w-xs items-end justify-center gap-4">
            <div className="w-20 opacity-60 sm:w-24">
              <Image
                src={chestClosed}
                alt="鍵のかかった宝箱"
                placeholder="blur"
                sizes="96px"
              />
              <p className="mt-1 text-center text-[10px] font-bold text-foreground/40">
                開ける前
              </p>
            </div>
            <div className="w-40 sm:w-48">
              <Image
                src={chestOpen}
                alt="まばゆい光とともに開く、最高ランクの宝箱"
                placeholder="blur"
                sizes="192px"
              />
              <p className="mt-1 text-center text-[10px] font-bold text-accent">
                SSランク獲得！
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-1">
            {growthPoints.map((point) => (
              <div key={point.title} className={`${glassCard} p-6`}>
                <h3 className="text-lg font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {point.body}
                </p>
                {point.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {point.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/30 bg-white/[0.04] px-2 py-0.5 text-[10px] font-bold text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
