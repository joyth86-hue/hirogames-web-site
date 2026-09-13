import { stickerButton } from "@/lib/ui";

const sizeClasses = {
  lg: "px-8 py-4 text-lg sm:text-xl",
  md: "px-6 py-3 text-base",
} as const;

// 実際に配信中のプレイURL。新しいタブで開く（rel="noopener noreferrer"は
// window.openerを介した参照・リファラー漏洩を防ぐための定番の組み合わせ）。
const PLAY_URL = "https://hello-weld-mu.vercel.app/";

export default function PlayButton({
  size = "lg",
  className = "",
}: {
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${stickerButton} ${sizeClasses[size]} ${className}`}
    >
      プレイする
      <span aria-hidden>▶</span>
    </a>
  );
}
