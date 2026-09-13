import { characters } from "@/lib/characters";
import CharacterCard from "@/components/CharacterCard";

// キャラクター単体の画像（characters/c0X_d01.png）は、ヒーロー等の精細な
// コンセプトアートとはタッチが大きく異なる（ドット絵のゲーム内スプライト）。
// 文章で説明・言い訳するのではなく、CharacterCard側の額縁とバッジという
// デザインだけで「意図的に違うものを並べている」と伝わるようにしている。
export default function CharacterShowcase() {
  return (
    <section
      id="characters"
      className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-brand text-sm font-bold tracking-wide text-accent sm:text-base">
            仲間たち
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            4人のヒロイン
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
            炎・草・氷、3つの属性を操る4人の仲間。カエデとサユミはともに草属性だが、
            武器種（法器と弓）の違いで戦い方が変わる。集めて育成し、
            ステージに合わせて最大3人のパーティを組もう。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}
