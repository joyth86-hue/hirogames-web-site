import Link from 'next/link';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {contactEmail,privacyPath,supportPath} from '@/lib/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://hirogames-web-site.vercel.app'),title:{default:'いしあつめ サポート | hirogames',template:'%s | いしあつめ'},description:'いしあつめのサポート情報、お問い合わせ先、プライバシーポリシー。'};
export default function Layout({children}:{children:ReactNode}){
 return <html lang="ja"><body><header className="site-header"><Link className="brand" href="/" aria-label="hirogames サポート トップ"><span>hiro</span><span>games</span></Link><nav aria-label="メインメニュー"><a href={supportPath}>サポート</a><a href={privacyPath}>プライバシー</a></nav></header>{children}<footer className="site-footer"><div className="footer-top"><Link className="brand small" href="/"><span>hiro</span><span>games</span></Link><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div><div className="footer-bottom"><span>© 2026 hirogames / Hiroki Tanaka</span><a href={privacyPath}>プライバシーポリシー</a></div></footer></body></html>;
}
