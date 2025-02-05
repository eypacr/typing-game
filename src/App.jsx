import { useState } from "react";
import SpeedTyper from "./components/SpeedTyper";
import Settings from "./components/Settings";

export default function App() {
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("difficulty") || "medium"
  );
  const [showSettings, setShowSettings] = useState(false); // Ayarların görünür olup olmama durumu

  // Zorluk seviyesi değiştiğinde, ayarları kaydediyoruz
  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    localStorage.setItem("difficulty", newDifficulty);
  };

  // Ayarları gösterme veya gizleme
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="App">
      {/* Ayarları sol alt köşeye yerleştiren buton */}
      <button onClick={toggleSettings} className="settings-btn">
        <i className="fas fa-cog"> </i>
      </button>

      {showSettings || (
        <Settings
          difficulty={difficulty}
          onDifficultyChange={handleDifficultyChange}
        />
      )}

      {/* SpeedTyper bileşeni */}
      <SpeedTyper difficulty={difficulty} />
    </div>
  );
}
