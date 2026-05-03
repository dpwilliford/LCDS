export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: 200 }}>
            <nav>
              <ul>
                <li>Overview</li>
                <li>Records</li>
                <li>Reports</li>
                <li>Imports</li>
                <li>Data Issues</li>
              </ul>
            </nav>
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}