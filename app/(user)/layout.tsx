import Header from "@/components/Header";
import "../globals.css";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Demo",
  description: "Demo showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  );
}
