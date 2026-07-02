import "@/src/asset/css/main.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <title>Life is simple</title>
        <meta name="description" content="A collection of articles, photography, creative and good design that makes life easy and enjoyble to experience it" />
        <meta name="author" content="Alessio Carone" />
      </head>
      <body>{children}</body>
    </html>
  );
}
