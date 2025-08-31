import Header from './header';
import Sidebar from './sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50" style={{position: 'relative', margin: '0', padding: '0'}}>
      <Header />
      <Sidebar />
      <main className="lg:pl-64" style={{position: 'absolute', top: '56px', left: '0', right: '0', bottom: '0', padding: '0'}}>
        {children}
      </main>
    </div>
  );
}