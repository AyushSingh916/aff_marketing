export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5276183886725656"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
