import Image from "next/image";

import type { Character } from "@/lib/characters";
import { elementStyles } from "@/lib/characters";
import { glassCard } from "@/lib/ui";

// ヒーロー等の精細なコンセプトアートと、このキャラクター画像（ドット絵の
// ゲーム内スプライト）はタッチが大きく異なる。無理に揃えようとするのでは
// なく、白地・黒縁・紫の落ち影というゲーム本体（WebApp_game）と同じ
// ステッカー風の額縁で画像を囲い、控えめなバッジを添えることで、文章の
// 説明なしにデザインだけで「意図的に違うものを並べている」と伝える。
// バッジ文言は、HPバーや戦闘背景を伴わない単なる切り抜き絵に対して
// 「ゲーム画面」は誇張になるため、実態に即して「キャラクター」とした。
export default function CharacterCard({ character }: { character: Character }) {
  const style = elementStyles[character.element];

  return (
    <div
      className={`${glassCard} group overflow-hidden transition-transform duration-200 hover:-translate-y-1`}
    >
      <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-black bg-[#f4f1ff] shadow-[4px_4px_0_0_#4a3f86]">
          <span className="absolute left-2 top-2 z-10 rounded-full border border-black bg-white px-2 py-0.5 text-[9px] font-bold text-black shadow-[2px_2px_0_0_#4a3f86]">
            キャラクター
          </span>
          <Image
            src={character.image}
            alt={`${character.name}（${character.romaji}）の立ち絵（ゲーム内ドット絵）`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 45vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            {character.name}
          </h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-bold ${style.bg} ${style.text} ${style.border}`}
          >
            {character.element}
          </span>
        </div>
        <p className="text-xs text-foreground/50">{character.romaji}</p>
        <p className="mt-2 text-xs leading-relaxed text-foreground/70 sm:text-sm">
          {character.blurb}
        </p>
        <p className="mt-2 text-xs text-foreground/50">武器：{character.weapon}</p>
      </div>
    </div>
  );
}
