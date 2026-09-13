import PlayButton from "@/components/PlayButton";

// スマホ幅では常に画面下部に「近日公開」の非活性表示を出しておき、
// どこまでスクロールしても配信準備中であることが伝わるようにする。
// デスクトップでは各セクション内の表示で十分なため非表示。
export default function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center border-t border-white/10 bg-[#100f24]/90 px-4 py-3 backdrop-blur-sm sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <PlayButton size="md" className="w-full max-w-xs" />
    </div>
  );
}
