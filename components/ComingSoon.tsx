import Image from "next/image";

import { upcomingGames } from "@/lib/games";
import { glassCard } from "@/lib/ui";

export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-brand text-sm font-bold tracking-wide text-accent sm:text-base">
            これから
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            もっとゲームが増えます
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            hiro games では Game 1 に続き、これからも新しいゲームを
            お届けしていく予定です。続報をお楽しみに。
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingGames.map((game) =>
            game.status === "available" ? (
              <a
                key={game.id}
                href={game.href ?? "#"}
                className={`${glassCard} block overflow-hidden transition-transform duration-200 hover:-translate-y-1`}
              >
                {game.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-black/20">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(min-width: 1024px) 360px, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {game.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {game.description}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={game.id}
                className="flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-white/20 bg-white/[0.03] p-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 text-2xl text-foreground/40">
                  ?
                </span>
                <h3 className="text-base font-bold text-foreground/60">
                  {game.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/45 sm:text-sm">
                  {game.description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
