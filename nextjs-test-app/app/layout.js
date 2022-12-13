import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head />
      <body>
        <Navbar />
        <section className='container'>
          {children}
        </section>
      </body>
    </html>
  );
}
