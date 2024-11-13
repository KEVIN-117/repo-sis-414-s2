import "@/app/ui/global.css";
import Link from "next/link";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul className="">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
