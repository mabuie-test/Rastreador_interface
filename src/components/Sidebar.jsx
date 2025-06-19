import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { to: '/dashboard',      label: 'Dashboard' },
    { to: '/tenants',        label: 'Tenants' },
    { to: '/users',          label: 'Utilizadores' },
    { to: '/devices', label: 'Dispositivos' }
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Gestão</h2>
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block p-2 mb-2 rounded ${isActive ? 'bg-blue-200' : 'hover:bg-gray-200'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
