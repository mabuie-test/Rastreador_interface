import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DeviceList() {
  const [devices, setDevices] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/devices`)
      .then(res => setDevices(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Dispositivos</h1>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => nav('/devices/new')}
        >
          + Novo
        </button>
      </div>
      <table className="w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Label</th>
            <th className="p-2">IMEI</th>
            <th className="p-2">Status</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(d => (
            <tr key={d._id} className="border-t">
              <td className="p-2">{d.label}</td>
              <td className="p-2">{d.imei}</td>
              <td className="p-2">{d.status}</td>
              <td className="p-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => nav(`/devices/${d._id}`)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}
