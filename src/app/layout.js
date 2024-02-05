import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Vedant Mohan Navale",
    template: "%s | Next.js 14 project vedant navale"
  },
  description: "vedant's Portfolio",
  icons: {
    icon: ['/logo.png?v=4']
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      < meta name="google-site-verification" content="9XWC1aIrbF7dlRlLdieevrgUMLCdeyyU7wPbKcDuZ7Q" />
      <body className={inter.className}>
        <div className='maincontainer'>
          <div className="area" >
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
