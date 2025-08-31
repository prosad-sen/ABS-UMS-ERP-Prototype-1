import Header from './header';
import Sidebar from './sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="lg:pl-64" style={{paddingTop: '35px'}}>
        {children}
      </main>
    </div>
  );
}