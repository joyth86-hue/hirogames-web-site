// サイト全体の背景（紺〜パープルのグラデーション）を、ビューポート全体に
// 固定表示する専用レイヤー。
//
// 以前は body に `background-attachment: fixed` を指定して同じ見た目を
// 実現していたが、これは既知のレンダリング不具合を引き起こしていた。
// ページ内のどこかに継続的な `transform`（`.animate-float` の浮遊アニメーション
// など）を使う要素があると、ブラウザの合成（コンポジット）処理と
// `background-attachment: fixed` が干渉し、デスクトップ幅でスクロール中に
// 背景の再描画が更新されず、ブラウザのデフォルト白背景が露出する帯が
// 一瞬〜断続的に現れる（Chromium系の既知の挙動。モバイル幅では再現しない）。
//
// 対策として、CSSの `background-attachment` に頼るのをやめ、実体を持つ
// `position: fixed` の単一div要素として、他のどの transform/filter/
// overflow 要素の子孫でもない root に近い階層（app/layout.tsx の
// <body> 直下）に配置する。fixed要素は「transformされた祖先を持たない
// 限り」常にビューポート基準で固定されるため、この階層に置く限り
// 問題を回避できる（`.animate-float` 等のtransformは、あくまで
// 浮かせたい対象そのものにだけ閉じており、この要素の祖先にはならない）。
export default function PageBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-20"
      style={{ background: "var(--background)" }}
    />
  );
}
