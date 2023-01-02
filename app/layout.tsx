import '../styles/globals.css'
import Header from './Header';
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html>
        {/* Include shared UI here e.g. a header or sidebar */}
        <head></head>
            <body>
            <Header />
            {children}
            </body>
       
      </html>
    );
  }