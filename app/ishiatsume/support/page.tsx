import Link from 'next/link';
import type {Metadata} from 'next';
import {contactEmail,mailLink,privacyPath} from '@/lib/site';
export const metadata:Metadata={title:'サポート',alternates:{canonical:'/ishiatsume/support/'}};
export default function Support(){return <main className="document"><Link className="back-link" href="/">← トップへ</Link><header className="document-heading"><p className="eyebrow">ISHIATSUME / SUPPORT</p><h1>サポート</h1><p className="lead">「いしあつめ」についてのご案内です。</p></header>
 <section aria-labelledby="faq"><h2 id="faq">よくある質問</h2><div className="faq-list">
 <details open><summary>ゲーム記録はどこに保存されますか？</summary><div><p>所持している鉱物、採掘の進行、実績、交換ポイント、展示配置、壁紙などは端末内に保存されます。</p><p>設定の「iCloudバックアップ」では、ゲーム記録をiCloudに保存できます。自動バックアップは初期状態ではオフです。必要に応じて有効にしてください。</p></div></details>
 <details><summary>機種変更・再インストール後に復元できますか？</summary><div><p>以前の端末でiCloudへのバックアップが完了していれば、同じiCloudのAppleアカウントでサインインした端末から復元できます。設定 → iCloudバックアップ → 記録を復元、の順に開いてください。</p><p>復元すると、現在の端末のゲーム記録がiCloudの記録に置き換わります。種類数や最終バックアップ日時を確認してから操作してください。バックアップしていない記録は、アプリを削除すると失われる場合があります。</p></div></details>
 <details><summary>購入した「毎日の採掘回数＋5回」が反映されません。</summary><div><p>購入に使用したApp StoreのAppleアカウントでサインインし、ショップ → アプリ内課金 → 購入を復元、をお試しください。</p><p>購入の権利と、鉱物などのゲーム記録の復元は別の機能です。iCloudとApp Storeで使用しているAppleアカウントが異なる場合もあります。</p></div></details>
 <details><summary>採掘できる回数はいつ回復しますか？</summary><div><p>通常は1日5回で、端末の日付が変わると回復します。初回限定で追加の5回があり、使い切るまで翌日以降も残ります。通常分から先に消費します。「毎日の採掘回数＋5回」を購入済みの場合、日次分が1日10回になります。日次分の未使用回数は繰り越されません。</p></div></details>
 <details><summary>端末の日時設定について</summary><div><p>端末の日時を手動で変更すると、採掘回数やゲームの進行に不整合が生じる場合があります。日時は自動設定のままご利用ください。</p></div></details>
 <details><summary>実績のポイントはどこで受け取れますか？</summary><div><p>実績画面の「まとめて受け取る」から、達成済みの実績のポイントを受け取れます。ショップのポイント交換で入手した壁紙は、設定から選択できます。</p></div></details>
 <details><summary>鉱物の見た目や表記が、実物と違うことがあります。</summary><div><p>鉱物の3Dイメージは特徴をもとにしたゲーム内の表現であり、現実のものとは異なります。和名・英字名には複数の呼称がある場合があり、広く浸透した和名がない場合は英字名をカタカナ表記しています。表示情報はゲームを楽しむための参考情報としてご覧ください。</p></div></details>
 </div></section>
 <section className="contact-block" aria-labelledby="contact"><p className="eyebrow">CONTACT</p><h2 id="contact">お問い合わせ</h2><p>解決しない場合や不具合のご報告は、以下のメールアドレスへご連絡ください。</p><a className="email-link" href={mailLink}>{contactEmail}<span aria-hidden="true">↗</span></a><p className="note">アプリのバージョン、iPhoneの機種、iOSのバージョン、問題が起きたときの操作を添えていただくと確認がしやすくなります。パスワード・認証コード・クレジットカード情報は送らないでください。</p><p className="note">運営：hirogames / Hiroki Tanaka</p></section><p className="related"><a href={privacyPath}>プライバシーポリシーを見る →</a></p>
 </main>}
