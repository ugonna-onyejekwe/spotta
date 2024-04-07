import "./globals.scss";

export const metadata = {
  title: "Spotta",
  description: "for the seamless posting and browsing of area based reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
