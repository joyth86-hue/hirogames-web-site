# いしあつめ サポートサイト

旧WebApp_MainSiteのNext.js・TypeScript・ビルド設定をWSへコピーし、新しいサポート専用サイトを作成。元フォルダーは変更しない。

- `/`：サポート入口
- `/ishiatsume/support/`：サポート・問い合わせ先
- `/ishiatsume/privacy/`：プライバシーポリシー
- 連絡先：joyth86@gmail.com（ユーザー指定）

`npm ci` → `npm run build`。静的出力は`out/`。ローカルプレビューは`npm run dev -- --port 3100`。

公開先は既存のhirogames-web-site.vercel.appを想定。実際の公開結果はdocs/WEB_HOSTING_REUSE.mdに記録する。Hobby利用条件については、アプリ本体の有無だけでは判断しない。本サイトは販売訴求・購入リンク・広告を設けない情報提供ページとしているが、Vercelの適用判断を保証するものではない。
