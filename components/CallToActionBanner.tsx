import Image from "next/image";

import bannerArt from "@/public/images/game1/hero/top03.png";
import PlayButton from "@/components/PlayButton";

export default function CallToActionBanner() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border-2 border-black shadow-[8px_8px_0_0_#4a3f86]">
        <div className="relative flex flex-col items-center bg-black/30">
          <div className="absolute inset-0">
            <Image
              src={bannerArt}
              alt=""
              aria-hidden
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-top opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100f24] via-[#100f24]/70 to-[#100f24]/30" />
          </div>

          <div className="relative flex flex-col items-center px-6 py-14 text-center sm:py-20">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              さあ、冒険をはじめよう。
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/75 sm:text-base">
              4人の仲間と共に、S-10のボスが待つ冒険へ。Game 1 は現在配信準備中、
              もうしばらくお待ちください。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <PlayButton size="lg" />
              <a
                href="#coming-soon"
                className="text-sm font-bold text-accent underline underline-offset-4 transition-colors hover:text-accent-strong"
              >
                今後の展開を見る ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
