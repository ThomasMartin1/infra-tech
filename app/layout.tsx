import "./globals.css";
import Nav from "../app/components/Nav";

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
      <body className="relative">
        <Nav />
        <div className="absolute top-0 -z-10">{children}</div>
      </body>
    </html>
  );
}
