import User from '@/components/User';
import { NavLink, Outlet } from 'react-router';

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/component', label: 'My Component' },
];

const RootLayout: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="py-4">
        <nav className="py-2 border-b border-gray-300">
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `p-2 rounded-sm hover:opacity-85 ${
                      isActive ? 'bg-blue-700 text-white' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="flex flex-wrap justify-between gap-4">
        <main className="flex-1">
          <Outlet />
        </main>
        <div className="hidden md:block w-96"></div>
        <aside className="flex-shrink-0 w-64">
          <div className="sticky top-0 p-4 bg-gray-200 rounded-md shadow-md">
            <User />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default RootLayout;
