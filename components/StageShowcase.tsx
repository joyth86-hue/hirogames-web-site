import Image from "next/image";

import { fields } from "@/lib/fields";
import { enemies } from "@/lib/enemies";
import { elementStyles } from "@/lib/characters";
import ElementWheel from "@/components/ElementWheel";
import { glassCard } from "@/lib/ui";

// フィールド背景（草原・洞窟・火山・海岸）と敵キャラクター、属性相性の輪を
// まとめて紹介するセクション。「旅の長さ・広さ」と「立ちはだかる相手」を
// 画像点数を増やして視覚的に伝える。ステージ数（100）はあくまで控えめに
// 一度だけ触れる程度に留め、数値そのものを主役にはしない。
export default function StageShowcase() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-brand text-sm font-bold tracking-wide text-accent sm:text-base">
            広がる旅路
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            越えるほどに、世界は広くなる。
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            草原を抜け、洞窟の闇をくぐり、火山の熱をかいくぐり、波打ち際へたどり着く。
            その数、気の遠くなるほど遠く。進むたびに景色は移り変わり、
            待ち受ける相手もまた、姿を変えていく。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {fields.map((field) => (
            <div
              key={field.id}
              className="group relative aspect-video overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#4a3f86]"
            >
              <Image
                src={field.image}
                alt={`${field.name}のフィールド背景`}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6">
                <p className="text-xs font-bold text-white sm:text-sm">
                  {field.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className={`${glassCard} p-6`}>
            <h3 className="text-lg font-bold text-foreground">属性の相性</h3>
            <div className="mt-4">
              <ElementWheel />
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-bold text-foreground lg:text-left">
              立ちはだかる敵たち
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {enemies.map((enemy) => {
                const style = elementStyles[enemy.element];
                return (
                  <div
                    key={enemy.id}
                    className={`${glassCard} overflow-hidden text-center`}
                  >
                    <div className="p-2 pb-0">
                      <div className="relative aspect-square w-full overflow-hidden rounded-lg border-2 border-black bg-[#f4f1ff] shadow-[2px_2px_0_0_#4a3f86]">
                        <Image
                          src={enemy.image}
                          alt={enemy.name}
                          fill
                          placeholder="blur"
                          sizes="120px"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="truncate text-xs font-bold text-foreground">
                        {enemy.name}
                      </p>
                      <span
                        className={`mt-1 inline-block rounded-full border px-1.5 py-0.5 text-[10px] font-bold ${style.bg} ${style.text} ${style.border}`}
                      >
                        {enemy.element}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-foreground/55 lg:text-left">
              岩や水の属性を持つ敵も現れるからこそ、輪のすべてが意味を持つ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
