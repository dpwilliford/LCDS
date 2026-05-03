import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex">
        <aside className="w-56 h-screen bg-black text-white p-4">
          <nav className="space-y-2">
            <Link href="/">Overview</Link><br/>
            <Link href="/records">Records</Link><br/>
            <Link href="/reports">Reports</Link><br/>
            <Link href="/imports">Imports</Link><br/>
            <Link href="/data-issues">Data Issues</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
