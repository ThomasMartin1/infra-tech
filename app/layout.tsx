import Link from "next/link";
import "./globals.css";
import { FaBars } from "react-icons/fa";

export const metadata = {
  title: "Infrastructure Technologies",
  description: "Official Site of Infrastructure Tech. LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex absolute w-full">
          <nav className="mx-auto mt-4 p-3 w-1/2 flex items-center justify-between">
            <img src="LogoHDMobile.png" alt="logo" className="h-14"></img>
            <ul>
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="">
                  Careers
                </Link>
              </li>
            </ul>
            <FaBars />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
