
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav/navBar';



export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <NavBar />
        <main style={{ paddingTop: '56px' }}> 
          {children}
        </main>
      </body>
    </html>
  );
}