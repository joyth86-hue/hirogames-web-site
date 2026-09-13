import type { StaticImageData } from "next/image";

import f01 from "@/public/images/game1/fields/f01_sougen_hiru.png";
import f06 from "@/public/images/game1/fields/f06_doukutsu.png";
import f08 from "@/public/images/game1/fields/f08_kazan.png";
import f09 from "@/public/images/game1/fields/f09_kaigan_hiru.png";

// 戦闘の舞台となるフィールド背景。地形・名称はdocs側のfields.mdに準拠。
// 実際には全10種類（+ 一部昼夜違い）あるが、ここでは代表として4種類を掲載。
export type Field = {
  id: string;
  name: string;
  copy: string;
  image: StaticImageData;
};

export const fields: Field[] = [
  {
    id: "f01",
    name: "草原",
    copy: "陽だまりの丘を抜け、旅はここから始まる。",
    image: f01,
  },
  {
    id: "f06",
    name: "洞窟",
    copy: "光の届かない地の底で、結晶だけが静かに輝く。",
    image: f06,
  },
  {
    id: "f08",
    name: "火山",
    copy: "噴き上がる熱と灰の中を、それでも前へ。",
    image: f08,
  },
  {
    id: "f09",
    name: "海岸",
    copy: "打ち寄せる波の音が、遠く来たことを教えてくれる。",
    image: f09,
  },
];
