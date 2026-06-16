import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Wired2Scale AI Platform Demo',description:'Creator whitelisting operations, masked client portal and AI tooling demo'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
