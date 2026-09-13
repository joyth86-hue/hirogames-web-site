const chain: { label: string; className: string }[] = [
  { label: "水", className: "bg-water/15 text-water border-water/50" },
  { label: "炎", className: "bg-fire/15 text-fire border-fire/50" },
  { label: "氷", className: "bg-ice/15 text-ice border-ice/50" },
  { label: "草", className: "bg-grass/15 text-grass border-grass/50" },
  { label: "岩", className: "bg-rock/15 text-rock border-rock/50" },
  { label: "水", className: "bg-water/15 text-water border-water/50" },
];

export default function ElementWheel() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {chain.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-base font-bold ${item.className}`}
            >
              {item.label}
            </span>
            {i < chain.length - 1 && (
              <span aria-hidden className="text-foreground/40">
                →
              </span>
            )}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground/60 sm:text-sm">
        矢印の先の属性を攻撃すると有利（ダメージ1.25倍）、逆向きに攻撃すると不利（0.75倍）。
        岩属性の「古びたクマさん」や水属性の「水スラ」など、パーティにはいない属性を持つ敵も登場するため、
        相性を読んだパーティ編成が重要になる。
      </p>
    </div>
  );
}
