import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PageBackground from "@/components/PageBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hiro games",
  description:
    "hiro games（ヒログゲームズ）公式サイト。属性を操る4人のヒロインを集めて育成し、10ステージの冒険バトルに挑むJRPG風ソシャゲ「Game 1」を紹介しています。",
  openGraph: {
    title: "hiro games",
    description:
      "属性を操る4人のヒロインを集めて育成し、10ステージの冒険バトルに挑むJRPG風ソシャゲ「Game 1」。",
    locale: "ja_JP",
    type: "website",
  },
};

// themeColorはSafari等のブラウザUI（アドレスバー等）の色をブランドの
// 背景色に合わせるためのもの。姉妹プロジェクト（WebApp_game）と同じ値。
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14132a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* 手書き風の丸ゴシック体。next/font/googleは日本語グリフを含む
            フォントの扱いが不安定なため、姉妹プロジェクトと同様に
            <link> タグから直接読み込んでいる。 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=M+PLUS+Rounded+1c:wght@500;700;800&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* transformを持つどの要素の子孫でもない、rootに近い階層に置く
            固定背景レイヤー。詳細はPageBackground.tsxのコメントを参照。 */}
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
