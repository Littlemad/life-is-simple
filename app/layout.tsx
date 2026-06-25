import "@/src/asset/css/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Life is simple</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A collection of articles, photography, creative and good design that makes life easy and enjoyble to experience it" />  
        <meta name="author" content="Alessio Carone" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
