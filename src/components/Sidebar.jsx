import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Sidebar({ onSelect }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/devices`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setDevices(res.data))
    .catch(() => {/* tratar erro */});
  }, []);

  return (
    <aside className="w-64 bg-gray-100 p-4 overflow-auto">
      <h2 className="text-lg mb-4">Dispositivos</h2>
      {devices.map(d => (
        <div
          key={d._id}
          className="p-2 mb-2 bg-white cursor-pointer"
          onClick={() => onSelect(d)}
        >
          <div className="font-bold">{d.label}</div>
          <div className={d.status === 'active' ? 'text-green-600' : 'text-red-600'}>
            {d.status}
          </div>
        </div>
      ))}
    </aside>
  );
}
