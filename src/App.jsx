import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import History from './components/History';
import DeviceWidget from './components/DeviceWidget';
import VoiceModal from './components/VoiceModal';
import Login from './components/Login';

export default function App() {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showVoice, setShowVoice]           = useState(false);
  const [token, setToken]                   = useState(localStorage.getItem('token'));

  // função que passa ao Login para atualizar o estado
  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  // Se não houver token, mostra Login
  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  // Depois do login, renderiza o dashboard
  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelectedDevice} />
      <div className="flex-1 flex flex-col">
        <div className="p-2 border-b flex justify-between">
          <DeviceWidget device={selectedDevice} onVoice={() => setShowVoice(true)} />
        </div>
        <div className="flex flex-1">
          <MapView device={selectedDevice} />
          <History device={selectedDevice} />
        </div>
      </div>
      {showVoice && (
        <VoiceModal onClose={() => setShowVoice(false)} device={selectedDevice} />
      )}
    </div>
  );
}
