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
      <main className="lg:pl-64 pt-6 pb-4">
        <div className="px-4 py-0 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}