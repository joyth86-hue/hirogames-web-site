// hiro games ブランド共通のUIスタイル定義。
//
// 「白地×黒縁×紫のオフセット影」のステッカー風ボタンは、姉妹プロジェクトの
// ゲーム本体（WebApp_game/lib/ui.ts）で確立されたデザイン言語をそのまま
// ランディングページ側にも踏襲したもの。押すと影の位置まで沈み込み、
// 影が小さくなることで「物理的に押した」感触を出す。

export const stickerButton =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-white font-bold text-black shadow-[4px_4px_0_0_#4a3f86] transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[1px_1px_0_0_#4a3f86]";

export const stickerButtonGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-white/5 font-bold text-foreground backdrop-blur-sm transition-colors duration-150 hover:bg-white/10";

// ガラス風カード（半透明の白＋薄い紫の縁取り）。キャラクターカードや
// 特徴カードなど、暗い背景に浮かせるパーツ全般で使う。
export const glassCard =
  "rounded-3xl border border-accent/30 bg-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm";
