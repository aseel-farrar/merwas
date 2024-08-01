import { Inter } from 'next/font/google';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Merwas Task',
  description: 'Merwas Task - next app',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
