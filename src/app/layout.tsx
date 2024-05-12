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
      <body>{children}</body>
    </html>
  );
}
