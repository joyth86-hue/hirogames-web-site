import type { StaticImageData } from "next/image";

import c01 from "@/public/images/game1/characters/c01_d01.png";
import c02 from "@/public/images/game1/characters/c02_d01.png";
import c03 from "@/public/images/game1/characters/c03_d01.png";
import c04 from "@/public/images/game1/characters/c04_d01.png";

export type Element = "炎" | "草" | "氷" | "弓" | "岩" | "水";

export type Character = {
  id: string;
  name: string;
  romaji: string;
  element: "炎" | "草" | "氷";
  weapon: string;
  image: StaticImageData;
  blurb: string;
};

// hiro fantasy（仮）に登場する4人の仲間キャラクター。
// 名前・属性・武器種は docs 側の roster.md に準拠。
// 表示順は物語上の加入順（アカネ→コユキ→カエデ→サユミ）に合わせている。
export const characters: Character[] = [
  {
    id: "c01",
    name: "アカネ",
    romaji: "Akane",
    element: "炎",
    weapon: "片手剣",
    image: c01,
    blurb: "剣を手に前線を駆ける、炎属性のアタッカー。",
  },
  {
    id: "c03",
    name: "コユキ",
    romaji: "Koyuki",
    element: "氷",
    weapon: "法器",
    image: c03,
    blurb: "冷気をまとう法器使い、氷属性のアタッカー。",
  },
  {
    id: "c02",
    name: "カエデ",
    romaji: "Kaede",
    element: "草",
    weapon: "法器",
    image: c02,
    blurb: "法器を操り味方を支える、草属性のサポーター。",
  },
  {
    id: "c04",
    name: "サユミ",
    romaji: "Sayumi",
    element: "草",
    weapon: "弓",
    image: c04,
    blurb: "弓で的確に射抜く、草属性のアタッカー。",
  },
];

export const elementStyles: Record<
  "炎" | "草" | "氷" | "岩" | "水",
  { text: string; bg: string; border: string }
> = {
  炎: { text: "text-fire", bg: "bg-fire/15", border: "border-fire/50" },
  草: { text: "text-grass", bg: "bg-grass/15", border: "border-grass/50" },
  氷: { text: "text-ice", bg: "bg-ice/15", border: "border-ice/50" },
  岩: { text: "text-rock", bg: "bg-rock/15", border: "border-rock/50" },
  水: { text: "text-water", bg: "bg-water/15", border: "border-water/50" },
};
