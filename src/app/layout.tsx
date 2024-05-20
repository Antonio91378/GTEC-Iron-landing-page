export const metadata = {
  title: "GTEC Iron",
  description: "Empresa de engenharia e construções modulares",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
