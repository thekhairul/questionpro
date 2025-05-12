import { NavLink, Outlet } from 'react-router';

const links = [
  { to: '/dashboard/posts', label: 'Posts' },
  { to: '/dashboard/comments', label: 'Comments' },
];

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <nav className="mb-8">
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
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
