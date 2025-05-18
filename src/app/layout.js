import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Unit Cave',
  description: 'Convert Units',
  icons:{
    icon:"/unitcave-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
