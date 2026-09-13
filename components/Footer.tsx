import Image from "next/image";

import logo from "@/public/images/game1/misc/l01.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-4 pb-28 pt-10 sm:px-6 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-10 text-center">
        <Image
          src={logo}
          alt="hiro games"
          sizes="128px"
          className="h-auto w-32 opacity-90"
        />
        <p className="max-w-sm text-xs leading-relaxed text-foreground/50 sm:text-sm">
          ダークファンタジーの世界で紡ぐ、やさしい冒険。
        </p>
        <p className="text-xs text-foreground/35">
          &copy; {year} hiro games
        </p>
      </div>
    </footer>
  );
}
