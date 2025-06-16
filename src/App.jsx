import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import History from './components/History';
import DeviceWidget from './components/DeviceWidget';
import VoiceModal from './components/VoiceModal';

export default function App() {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showVoice, setShowVoice] = useState(false);

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
        <VoiceModal
          onClose={() => setShowVoice(false)}
          device={selectedDevice}
        />
      )}
    </div>
  );
}
