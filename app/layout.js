import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';

export const metadata = {
  title: 'Mie Ayam Mas Rio - Rumah Makan Mas Rio Wong Sragen',
  description: 'Mie ayam Pangsit Terenak dan Viral Di Politeknik Negeri Manado',
  keywords: 'mie ayam, mas rio, sragen, rumah makan, mahasiswa, bakso, manado',
  openGraph: {
    title: 'Mie Ayam Mas Rio',
    description: 'Mie ayam Pangsit Terenak dan Viral Di Politeknik Negeri Manado, HALAL, Enak, Murah, Mantap, Porsi Mantap, Harga Terjangkau',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
