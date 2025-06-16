import React, { useState } from 'react';
import axios from 'axios';

export default function VoiceModal({ onClose, device }) {
  const [loading, setLoading] = useState(false);

  const start = async () => {
    setLoading(true);
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/device/${device._id}/voice-trigger`,
      { durationSec: 15 },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h3 className="text-lg mb-4">Iniciar Gravação de Voz</h3>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={start}
          disabled={loading}
        >
          {loading ? 'Gravando...' : 'Iniciar'}
        </button>
        <button
          className="ml-2 px-4 py-2 bg-gray-300 rounded"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
