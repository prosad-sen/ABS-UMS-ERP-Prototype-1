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
      <main style={{position: 'absolute', top: '56px', left: '256px', right: '0', bottom: '0', padding: '0'}}>
        {children}
      </main>
    </div>
  );
}