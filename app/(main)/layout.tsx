import Navbar from "@/components/layouts/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
      
      {children}
    </>
  );
}