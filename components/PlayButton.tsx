const sizeClasses = {
  lg: "px-8 py-4 text-lg sm:text-xl",
  md: "px-6 py-3 text-base",
} as const;

// 配信準備中であることを一目で伝える、非活性表示の「近日公開」表示。
//
// 以前は本物のプレイボタンのような見た目（白背景・立体的なオフセット影・
// ホバーで浮き上がる演出・矢印アイコン）でありながら、クリックしても
// ページ内スクロールが起きるだけで実際には何も始まらず、「動くふりをした
// 空ボタン」だと指摘された。配信URLが無い以上、押せるように見せること
// 自体が不誠実なので、グレーアウト・cursor-not-allowed・影や矢印なしの
// 明確に非活性な表示に変更した。実際に機能するページ内スクロールは、
// このボタンとは別に、各セクション側で「〇〇を見る」という控えめな
// リンクとして用意している（Hero/GameShowcase/CallToActionBannerを参照）。
export default function PlayButton({
  size = "lg",
  className = "",
}: {
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-stretch gap-1.5 ${className}`}>
      <span
        aria-disabled="true"
        role="button"
        className={`inline-flex cursor-not-allowed select-none items-center justify-center gap-2 rounded-full border-2 border-dashed border-white/25 bg-white/[0.06] font-bold text-foreground/60 ${sizeClasses[size]}`}
      >
        近日公開
      </span>
      <span className="self-center text-[11px] font-bold tracking-[0.15em] text-foreground/45">
        COMING SOON
      </span>
    </div>
  );
}
