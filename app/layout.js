export const metadata = {
  title: "Writing IDE",
  description: "AI Writing IDE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
