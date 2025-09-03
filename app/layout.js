import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Notes App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
