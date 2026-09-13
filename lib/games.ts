import type { StaticImageData } from "next/image";

// 「今後のゲーム展開」セクション用のデータ。
//
// 現在は hiro fantasy（仮） のみ配信中で、次回作はまだ影も形も決まっていないため
// プレースホルダーのみを並べている。新しいゲームが具体化したら、
// status を "available" にして image / href / description を埋めた
// エントリを追加するだけで、下部のカード一覧に反映される想定。
export type UpcomingGame = {
  id: string;
  title: string;
  description: string;
  status: "coming-soon" | "available";
  image?: StaticImageData;
  href?: string;
};

export const upcomingGames: UpcomingGame[] = [
  {
    id: "next-title-1",
    title: "近日公開",
    description: "新しいゲームを準備中です。お楽しみに。",
    status: "coming-soon",
  },
  {
    id: "next-title-2",
    title: "近日公開",
    description: "続報をお待ちください。",
    status: "coming-soon",
  },
];
