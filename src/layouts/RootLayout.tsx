import { NavLink, Outlet } from 'react-router';

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/component', label: 'My Component' },
];

const RootLayout: React.FC = () => {
  return (
    <div className="container mx-auto">
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
      <section className="flex justify-between gap-4">
        <main className="flex-grow">
          <Outlet />
        </main>
        <aside>
          <div className="p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold">Sidebar</h2>
            <p>This is the sidebar content.</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default RootLayout;
