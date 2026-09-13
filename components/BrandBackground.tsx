// ヒーローセクション専用の装飾背景。
//
// 以前はページ全体（fixed inset-0）に「hiro games」の文字を敷き詰めた模様を
// 濃いめ（opacity 0.7）に重ねていたが、本文・見出し・ボタンの真後ろまで模様が
// 敷き詰められて安っぽく見える／可読性を損なう、という指摘を受けて、装飾として
// 意図したヒーローセクションの中だけに限定し、濃さも大きく下げた。
//
// さらに、以前は背景ドリフトアニメーション用の余白として `inset-[-15%]` で
// ヒーローセクションの外側にまではみ出すサイズにしていたが、これがヒーローと
// 次セクションの境界付近でわずかに模様が透けて見える原因になっていた。
// background-repeatでタイル敷きする模様はbackground-positionをずらしても
// 継ぎ目なく繋がるため、はみ出す余白は本来不要。セクションの実寸（inset-0）
// ぴったりに収め、このコンポーネント自身にも overflow-hidden をかけて、
// ヒーローセクションのbounding boxから絶対にはみ出さないようにしている。
//
// 使う側（Hero.tsx）が `relative overflow-hidden` なセクションであることが前提。
// 装飾のみなので aria-hidden、操作を邪魔しないよう pointer-events-none、
// 他コンテンツより手前に来ないよう常に最背面（-z-10）に固定。
export default function BrandBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="animate-bg-drift absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(/images/game1/misc/pattern-hiro-games.svg)",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
