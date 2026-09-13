const games = [
  {
    title: "開発中のゲーム",
    description: "現在制作中です。詳細は近日公開予定です。",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-24">
        <header className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Hiro Games
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            制作したブラウザゲームを紹介するサイトです。
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            ゲーム一覧
          </h2>
          <ul className="flex flex-col gap-4">
            {games.map((game) => (
              <li key={game.title}>
                <a
                  href={game.href}
                  className="block rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <h3 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                    {game.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {game.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
