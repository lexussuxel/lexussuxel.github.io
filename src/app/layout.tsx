import { Header } from "./components/Header";
import "./globals.css";
import { el_mes, inter } from "./utils";
export const metadata = {
  title: "Alexandra Danilevich",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={el_mes.className + " " + inter.className}>
        <Header />
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  );
}
