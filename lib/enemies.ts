import type { StaticImageData } from "next/image";

import e02 from "@/public/images/game1/enemies/e02_d01.png";
import e03 from "@/public/images/game1/enemies/e03_d01.png";
import e05 from "@/public/images/game1/enemies/e05_d01.png";
import { elementStyles } from "@/lib/characters";

// 行く手を阻む敵キャラクター。名称・属性はdocs側のroster.md / enemies.mdに準拠。
export type Enemy = {
  id: string;
  name: string;
  element: keyof typeof elementStyles;
  copy: string;
  image: StaticImageData;
};

export const enemies: Enemy[] = [
  {
    id: "e02",
    name: "ゴブリン兄貴",
    element: "草",
    copy: "群れの中でひときわ大柄な、頼れる（厄介な）兄貴分。",
    image: e02,
  },
  {
    id: "e03",
    name: "古びたクマさん",
    element: "岩",
    copy: "ほつれたぬいぐるみの姿で、岩のように固い守りを見せる。",
    image: e03,
  },
  {
    id: "e05",
    name: "水スラ",
    element: "水",
    copy: "とぷんと揺れる体で、じわりと間合いを詰めてくる。",
    image: e05,
  },
];
